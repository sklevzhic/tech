import {usersAPI} from "../api/api";

let FOLLOW = 'FOLLOW';
let SET_USERS = 'SET_USERS';
let SELECT_PAGE = 'SELECT_PAGE';
let TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
let GET_TOTAL_USERS = 'GET_TOTAL_USERS';
let TOOGLE_FOLLOWING_IN_PROGRESS = 'TOOGLE_FOLLOWING_IN_PROGRESS'
let IS_AUTH = 'IS_AUTH'


let initialState = {
    users: [],
    rowsPerPage: 10,
    currentPage: 1,
    totalUsers: 0,
    isFetching: false,
    followingInProgress: []
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users.items],
                totalUsers: action.users.totalCount
            }
        }
        case IS_AUTH: {
            return {
                ...state,
                isAuth: action.body
            }
        }
        case SELECT_PAGE: {
            return {
                ...state,
                currentPage: action.page + 1
            }

        }
        case GET_TOTAL_USERS: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }

        }
        case TOGGLE_PRELOADER: {
            return {
                ...state,
                isFetching: action.isFetching
            }

        }
        case TOOGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.isFetching]
                        : state.followingInProgress.filter(id => id !== action.userId)

            }
        }
        default:
            return state
    }

}
// Подписка
export const followSuccess = (id) => {
    return {type: FOLLOW, id: id}
}
export const isAuth = (body) => {
    return {type: FOLLOW, body: body}
}
export const unfollowSuccess = (id) => {
    return {type: FOLLOW, id: id}
}
export const setUsers = (users) => {
    return {type: SET_USERS, users}
}
export const selectPage = (page) => {
    return {type: SELECT_PAGE, page}
}
export const getTotalUsers = (totalUsers) => {
    return {type: GET_TOTAL_USERS, totalUsers}
}
export const togglePreloader = (isFetching) => {
    return {type: TOGGLE_PRELOADER, isFetching}
}

export const toggleFollowingInProgress = (isFetching, userID) => {
    return {type: TOOGLE_FOLLOWING_IN_PROGRESS, isFetching, userID}
}

export const getUsersThunkCreator = (rowsPerPage, currentPage) => {
    return async (dispatch) => {
        dispatch(togglePreloader(true))
        let response = await usersAPI.getUsers(rowsPerPage, currentPage)
        dispatch(setUsers(response))
        dispatch(togglePreloader(false))
    }
}


const followUnfollowFlow = async (dispatch, id, apiMethod) => {
    dispatch(toggleFollowingInProgress(true, id))
    let response = await apiMethod(id)
    if (response.data.resultCode == 0) {
        dispatch(followSuccess(id))
    }
    dispatch(toggleFollowingInProgress(false, id))
}
export const follow = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,id, usersAPI.following)
    }
}
export const unfollow = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.unfollowing)
    }
}

export default UsersReducer