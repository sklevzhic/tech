import {techAPI} from "../api/api";

const SET_TYPES = 'SET_TYPES'
const SET_TECHNICS_FOR_TYPE = 'SET_TECHNICS_FOR_TYPE'

let initialState = {
    technics: [],
    types: []
}

const TechReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPES: {
            return {
                ...state,
                types: Array.from(new Set([...action.payload].map(item => item.type)))
            }
        }
        case SET_TECHNICS_FOR_TYPE: {
            return {
                ...state,
                technics: [...action.payload]
            }
        }
        default:
            return state
    }

}

export const setTypes = (payload) => {
    return {type: SET_TYPES, payload}
}
export const setTechnicForTypes = (payload) => {
    return {type: SET_TECHNICS_FOR_TYPE, payload}
}
export const getTypes = () => {
    return async (dispatch) => {
        let response = await techAPI.getTypes()
        dispatch(setTypes(response))
    }
}
export const getTechnicForTypes = () => {
    return async (dispatch) => {
        let response = await techAPI.getTechnicsForTypes()
    }
}

export default TechReducer