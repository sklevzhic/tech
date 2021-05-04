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
    updateUserInfo(user) {
        return instance.put(`/profile`, user)
            .then(responce => responce.data)
    },

    uploadPhoto(photo) {
        let formData =  new FormData();
        formData.append("image", photo)
        return instance.put(`/profile/photo`, formData, {
            headers: { 'content-type': 'multipart/form-data' }
        })

    },
    updateStatus(status) {
        return instance.put('profile/status', status)
    }

}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`).then(responce => responce.data)
    },
    login(email, password, rememberMe, captcha) {
        return  instance.post(`/auth/login`, {email, password, rememberMe, captcha}).then(responce => responce.data)
    },
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`).then(responce => {
            return  responce.data.url
        })
    },
    logout() {
        return  instance.post(`/auth/logout`).then(responce => responce.data)
    }
}

