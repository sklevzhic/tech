import {createSelector} from "reselect";

const UsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsers = createSelector(UsersSelector, (users) => {
   return users.filter(u => true)
})