import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "69bc9857-b17c-4142-859f-4409d84efd2a"
    }
})
export const usersAPI = {
    getUsers(rowsPerPage, currentPage) {
        return instance.get(`/users?page=${currentPage}&count=${rowsPerPage}`)
            .then(responce => responce.data)
    },
    getUserInfo(id) {
        console.log('invalid')
        return profileAPI.getUserInfo(id)
    },
    following(id) {
        return instance.post(`/follow/${id}`)
    },
    unfollowing (id) {
        return instance.delete(`/follow/${id}`)
    }
}

export const profileAPI = {
    getUserInfo(id) {
        return instance.get(`/profile/${id}`)
            .then(responce => responce.data)
    },
    getStatus(id) {
        return instance.get(`/profile/status/${id}`)
            .then(responce => responce)
    },
    updateStatus(status) {
        return instance.put('profile/status', status)
            .then(responce => responce.data);
    }

}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`).then(responce => responce.data)
    },
    login(email, password, rememberMe) {
        return  instance.post(`/auth/login`, {email, password, rememberMe}).then(responce => responce.data)
    },
    logout() {
        return  instance.post(`/auth/logout`).then(responce => responce.data)
    }
}

