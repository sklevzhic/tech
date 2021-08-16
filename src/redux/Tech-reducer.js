import {techAPI} from "../api/api";

const SET_TYPES = 'SET_TYPES'
const ADD_TYPE = 'ADD_TYPE'
const DELETE_TYPE = 'DELETE_TYPE'
const SET_ACTIVE_TYPE = 'SET_ACTIVE_TYPE'
const SET_TECHNICS = 'SET_TECHNICS'
const SET_TECHNIC = 'SET_TECHNIC'
const UPDATE_TECHNIC = 'UPDATE_TECHNIC'
const SET_USERS1 = 'SET_USERS1'
const ADD_USER = 'ADD_USER'
const TOOGLE_LOADING_IN_FOR_TYPE = 'TOOGLE_LOADING_IN_FOR_TYPE'
const TOOGLE_LOADING_TECHNICS = 'TOOGLE_LOADING_TECHNICS'
const SET_ROOMS = 'SET_ROOMS'
const ADD_COMMENT = 'ADD_COMMENT'
const SET_COMMENTS = 'SET_COMMENTS'
const SET_STATISTIC = 'SET_STATISTIC'
const SET_TECHNICS_BY_ROOM = 'SET_TECHNICS_BY_ROOM'
const SET_ADDED_TECHNIC = 'SET_ADDED_TECHNIC'

let initialState = {
    types: [],
    activeType: {},
    activeTechnic: {},
    activeTechnicComments: [],
    statistics: [],
    toogleLoadingInfoFotType: false,
    technics: [],
    technicsByCategory: [],
    technicsByRoom: [],
    toogleLoadingTechnics: false,
    users: [],
    paramsTechnics: [
        {title: "Годы выпуска", property: "year"},
        {title: "Факультеты", property: "faculty"},
        {title: "Корпуса", property: "build"},
        {title: "Наименование", property: "name"},
        {title: "Кабинеты", property: "room"},
        {title: "Сотрудники", property: "user"},
        {title: "Материально-ответственные лица", property: "matfyo"}
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
            key: "user",
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
        },
        {
            id: "10",
            key: "build",
            bg: "#14cbcb",
            name: "Корпус",
        },
        {
            id: "11",
            key: "room",
            bg: "#cb14c8",
            name: "Кабинет"
        }
    ],
}
const groupElements = (property, arr) => {
    return arr.reduce((previousValue, currentValue) => {
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
    }, []).sort((a, b) => a[property] - b[property])
}
const TechReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPES: {
            return {
                ...state,
                types: action.payload
            }
        }
        case SET_USERS1: {
            return {
                ...state,
                users: action.payload
            }
        }
        case SET_ROOMS: {
            return {
                ...state,
                rooms: action.payload
            }
        }
        case SET_TECHNICS: {
            return {
                ...state,
                technics: action.payload,
                technicsByCategory: groupElements("room", action.payload),
            }
        }
        case SET_ADDED_TECHNIC: {
            return {
                ...state,
                technics: [...state.technics, action.payload],
                technicsByCategory: groupElements("room", state.technics),
            }
        }
        case SET_TECHNICS_BY_ROOM: {
            return {
                ...state,
                technicsByRoom: action.payload
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
            return {
                ...state,
                activeTechnic: action.payload
            }
        }
        case ADD_USER: {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }
        case ADD_COMMENT: {
            return {
                ...state,
                activeTechnicComments: [...state.activeTechnicComments, action.payload]
            }
        }
        case SET_COMMENTS: {
            return {
                ...state,
                activeTechnicComments: action.payload
            }
        }
        case SET_STATISTIC: {
            let groupTechnics = groupElements(action.payload, state.technics)
            return {
                ...state,
                statistics: groupTechnics
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
    return {type: SET_USERS1, payload}
}
export const addUserAC = (payload) => {
    return {type: ADD_USER, payload}
}

export const addCommentAC = (payload) => {
    return {type: ADD_COMMENT, payload}
}

export const setRoomsAC = (payload) => {
    return {type: SET_ROOMS, payload}
}
export const setCommentsAC = (payload) => {
    return {type: SET_COMMENTS, payload}
}

export const setStatisticAC = (payload) => {
    return {type: SET_STATISTIC, payload}
}
export const setTechnicsByRoomAC = (payload) => {
    return {type: SET_TECHNICS_BY_ROOM, payload}
}
export const setAddedTechnicAC = (payload) => {
    return {type: SET_ADDED_TECHNIC, payload}
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
export const getActiveType = (value, years, builds) => {
    return async (dispatch) => {
        dispatch(toogleLoadingInForTypeAC(true))
        let response = await techAPI.getActiveType(value)
        if (response) {
            dispatch(setActiveTypeAC(response))
            dispatch(getTechnicsForType(response.name, years, builds))
        }
    }
}
export const getTechnicsForType = (value) => {
    return async (dispatch) => {
        let response = await techAPI.getTechnicsForType(value)

        dispatch(setTechnicsAC(response))
        dispatch(toogleLoadingInForTypeAC(false))

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
export const getUsers = () => {
    return async (dispatch) => {
        let usersResponse = await techAPI.getUsers()
        dispatch(setUsersAC(usersResponse))
        return usersResponse
    }
}
export const getRooms = () => {
    return async (dispatch) => {
        let roomsResponse = await techAPI.getRooms()
        let rooms = [...new Set(roomsResponse.map(el => el.room))].sort().map((el, i) => {
            if (el) {
                return {
                    room: el,
                    id: i
                }
            } else {
                return ''
            }

        })
        dispatch(setRoomsAC(rooms))
        return rooms
    }
}
export const addUser = (data) => {
    return async (dispatch) => {
        let response = await techAPI.addUser(data)
        dispatch(addUserAC(response))
    }
}
export const getComments = (id) => {
    return async (dispatch) => {
        let response = await techAPI.getComments(id)
        dispatch(setCommentsAC(response))
    }
}

export const addTechnic = (data) => {
    return async (dispatch) => {
        let response = await techAPI.addTechnic(data)
        dispatch(setAddedTechnicAC(response))

    }
}
export const addComment = (id, value) => {
    return async (dispatch) => {
        let response = await techAPI.addComment(id, value)
        dispatch(addCommentAC(response))
    }
}
export const getStatistic = (value) => {
    return async (dispatch) => {
        dispatch(setStatisticAC(value))
    }
}
export const getTechnicsByRoom = (room) => {
    return async (dispatch) => {
        let technicsByRoom = await techAPI.getTechnicsByRoom(room)
        let groupTechnics = groupElements("user", technicsByRoom)
        dispatch(setTechnicsByRoomAC(groupTechnics))
        return groupTechnics
    }
}
export default TechReducer