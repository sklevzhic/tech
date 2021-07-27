import {techAPI} from "../api/api";

const SET_TYPES = 'SET_TYPES'
const ADD_TYPE = 'ADD_TYPE'
const DELETE_TYPE = 'DELETE_TYPE'
const SET_ACTIVE_TYPE = 'SET_ACTIVE_TYPE'
const SET_TECHNICS = 'SET_TECHNICS'
const SET_TECHNIC = 'SET_TECHNIC'
const UPDATE_TECHNIC = 'UPDATE_TECHNIC'
const SET_USERS_TECH = 'SET_USERS_TECH'
const ADD_USER = 'ADD_USER'
const TOOGLE_LOADING_IN_FOR_TYPE = 'TOOGLE_LOADING_IN_FOR_TYPE'
const TOOGLE_LOADING_TECHNICS = 'TOOGLE_LOADING_TECHNICS'

let initialState = {
    types: [],
    activeType: {},
    activeTechnic: {},
    yearsOfProduction: [],
    korpuses: [],
    matfyos: [],
    toogleLoadingInfoFotType: false,
    technics: [],
    toogleLoadingTechnics: false,
    users: [],
    subdivisions: [
        {name: "Фаукультет доуниверситетской подготовки", id: 1},
        {name: "Фаукультет дополнительного профессионального образования", id: 2},
        {name: "Фаукультет уx`правления и профессионального развития педагогов", id: 3},
        {name: "Гостиница Университетская", id: 4},
        {name: "Первое образование", id: 5},
        {name: "ЦДО Альтернатива", id: 6}
    ],
    rooms: [],
    keys: [
        {
            id: "1",
            key: "name",
            bg: "#ec1717",
            name: "Наименование"
        },
        {
            id: "2",
            key: "type",
            bg: "#1aeabf",
            name: "Тип"

        },
        {
            id: "3",
            key: "fyo",
            bg: "#887d1a",
            name: "ФИО сотрудника"
        },
        {
            id: "4",
            key: "matfyo",
            bg: "#1a8842",
            name: "Материально-ответственное лицо"
        },
        {
            id: "5",
            key: "zavod",
            bg: "#cb14c8",
            name: "Заводскрй номер"
        },
        {
            id: "6",
            key: "date",
            bg: "#4bcb14",
            name: "Дата получения"
        },
        {
            id: "7",
            key: "year",
            bg: "#cb145d",
            name: "Год выпуска"
        },
        {
            id: "8",
            key: "zavod",
            bg: "#1451cb",
            name: "Заводской номер"
        },
        {
            id: "9",
            key: "print",
            bg: "#cb8e14",
            name: "Наклейка"
        }
    ]

}

const TechReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPES: {
            return {
                ...state,
                types: action.payload
            }
        }
        case SET_USERS_TECH: {
            return {
                ...state,
                users: action.payload
            }
        }
        case SET_TECHNICS: {
            const groupElements = (property) => {
                return action.payload.reduce((previousValue, currentValue, index, array) => {
                    let objType = previousValue.find(
                        (element) => element[property] === currentValue[property]
                    );
                    if (!objType) {
                        previousValue.push({
                            [property]: currentValue[property],
                            properties: [currentValue]
                        });
                    } else {
                        objType.properties.push(currentValue);
                    }
                    return previousValue;
                }, []).sort((a,b) => a[property] - b[property])
            }
            return {
                ...state,
                technics: groupElements("room"),
                yearsOfProduction: groupElements("year"),
                korpuses: groupElements("korpus"),
                matfyos: groupElements("matfyo")

            }
        }
        case SET_TECHNIC: {
            return {
                ...state,
                activeTechnic: action.payload
            }
        }
        case ADD_TYPE: {
            return {
                ...state,
                types: [...state.types, action.payload]
            }
        }
        case DELETE_TYPE: {
            return {
                ...state,
                types: state.types.filter(el => el.id !== action.payload)
            }
        }
        case SET_ACTIVE_TYPE: {
            return {
                ...state,
                activeType: action.payload
            }
        }

        case TOOGLE_LOADING_IN_FOR_TYPE: {
            return {
                ...state,
                toogleLoadingInfoFotType: action.payload
            }
        }
        case TOOGLE_LOADING_TECHNICS: {
            return {
                ...state,
                toogleLoadingTechnics: action.payload
            }
        }
        case UPDATE_TECHNIC: {
            let aa = Object.keys(state.technics).map(key => {
                return state.technics[key].map(el => {
                    if (el.id === action.payload.id) {
                        return action.payload
                    }
                    return el
                })
            })
            return {
                ...state,
                technics: aa
            }
        }
        case ADD_USER: {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }
        default:
            return state
    }

}

export const setTypesAC = (payload) => {
    return {type: SET_TYPES, payload}
}
export const addTypeAC = (payload) => {
    return {type: ADD_TYPE, payload}
}
export const deleteTypeAC = (payload) => {
    return {type: DELETE_TYPE, payload}
}
export const updateTechnicAC = (payload) => {
    return {type: UPDATE_TECHNIC, payload}
}
export const setActiveTypeAC = (payload) => {
    return {type: SET_ACTIVE_TYPE, payload}
}

export const toogleLoadingInForTypeAC = (payload) => {
    return {type: TOOGLE_LOADING_IN_FOR_TYPE, payload}
}
export const setTechnicsAC = (payload) => {
    return {type: SET_TECHNICS, payload}
}
export const setTechnic = (payload) => {
    return {type: SET_TECHNIC, payload}
}
export const toogleLoadingTechnicsAC = (payload) => {
    return {type: TOOGLE_LOADING_TECHNICS, payload}
}
export const setUsersAC = (payload) => {
    return {type: SET_USERS_TECH, payload}
}
export const addUserAC = (payload) => {
    return {type: ADD_USER, payload}
}


export const getTypes = () => {
    return async (dispatch) => {
        let response = await techAPI.getTypes()
        dispatch(setTypesAC(response))
    }
}
export const addType = (obj) => {
    return async (dispatch) => {
        let response = await techAPI.addType(obj)
        if (response.status === 201) {
            dispatch(addTypeAC(response.data))
        }
    }
}
export const deleteType = (id) => {
    return async (dispatch) => {
        let response = await techAPI.deleteType(id)
        if (response.status === 200) {
            dispatch(deleteTypeAC(id))
        }
    }
}
export const getActiveType = (value) => {
    return async (dispatch) => {
        dispatch(toogleLoadingInForTypeAC(true))

        let response = await techAPI.getActiveType(value)
        if (response) {
            dispatch(setActiveTypeAC(response))
            dispatch(getTechnicsForType(response.name))
        }
    }
}
export const getTechnicsForType = (value) => {
        return async (dispatch) => {
        let response = await techAPI.getTechnicsForType(value)

        dispatch(setTechnicsAC(response))
            dispatch(toogleLoadingInForTypeAC(false))
        // let usersResponse = await techAPI.getUsers()
        // dispatch(setUsersAC(usersResponse))
    }
}
export const getTechnicInfo = (id) => {
    return async (dispatch) => {
        let response = await techAPI.getTechnicInfo(id)
        dispatch(setTechnic(response))

    }
}
export const updateTechnic = (id, data) => {
    return async (dispatch) => {
        let response = await techAPI.updateTechnic(id, data)
        if (response.status === 200) {
            dispatch(updateTechnicAC(response.data))
        }
    }
}

export const addUser = (data) => {
    return async (dispatch) => {
        let response = await techAPI.addUser(data)
        dispatch(addUserAC(response))
    }
}

export default TechReducer