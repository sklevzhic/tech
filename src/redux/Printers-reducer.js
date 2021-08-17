import {printersAPI} from "../api/api";

const GET_REFILLS = 'GET_REFILLS';
const GET_ALL_REFILLS = 'GET_ALL_REFILLS'
const GET_CURRENT_REFILLS = 'GET_CURRENT_REFILLS'
const SET_PRINTERS = 'SET_PRINTERS'


let initialState = {
    refills: [],
    printers: [],
    allRefills: [],
    currentRefills: []
}

const PrintersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REFILLS: {
            return {
                ...state,
                refills: action.payload
            }
        }
        case GET_ALL_REFILLS: {
            return {
                ...state,
                allRefills: action.payload
            }
        }
        case GET_CURRENT_REFILLS: {
            return {
                ...state,
                currentRefills: action.payload
            }
        }
        case SET_PRINTERS: {
            return {
                ...state,
                printers: action.payload
            }
        }
        default:
            return state
    }

}
export const setAllRefillsAC = (payload) => {
    return {type: GET_ALL_REFILLS, payload}
};
export const setCurrentRefillsAC = (payload) => {
    return {type: GET_CURRENT_REFILLS, payload}
}

export const setRefillsAC = (payload) => {
    return {type: GET_REFILLS, payload}
};
export const setPrintersAC = (payload) => {
    return {type: SET_PRINTERS, payload}
};

export const getAllRefills = () => async (dispatch) => {
    let response = await printersAPI.getAllRefills()
    dispatch(setAllRefillsAC(response))
}
export const getRefills = (id) => async (dispatch) => {
    let response = await printersAPI.getRefills(id)
    dispatch(setRefillsAC(response))
}
export const getCurrentRefills = () => async (dispatch) => {
    let response = await printersAPI.getCurrentRefills()
    dispatch(setCurrentRefillsAC(response))
    return response
}

export const getPrintersAll = () => async (dispatch) => {
    let response = await printersAPI.getPrintersAll()
    dispatch(setPrintersAC(response))
}
export const sendOrder = (id) => async (dispatch) => {
    let response = await printersAPI.sendOrder(id)
    dispatch(setPrintersAC(response))
}

export const updateCurrentRefills = (data) => async (dispatch) => {
    let response = await printersAPI.updateCurrentRefills(data)
}

export default PrintersReducer