import axios from "axios";
import {sendOrder, updateCurrentRefills} from "../redux/Printers-reducer";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "69bc9857-b17c-4142-859f-4409d84efd2a"
    }
})
export const usersAPI = {
    getUsers(rowsPerPage, currentPage, friend) {
        return instance.get(`/users?page=${currentPage}&count=${rowsPerPage}&friend=${friend}`)
            .then(responce => responce.data)
    },
    following(id) {
        return instance.post(`/follow/${id}`)
    },
    unfollowing(id) {
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
        let formData = new FormData();
        formData.append("image", photo)
        return instance.put(`/profile/photo`, formData, {
            headers: {'content-type': 'multipart/form-data'}
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
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha}).then(responce => responce.data)
    },
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`).then(responce => {
            return responce.data.url
        })
    },
    logout() {
        return instance.post(`/auth/logout`).then(responce => responce.data)
    }
}

export const techAPI = {
    getTypes() {
        return axios.get(`http://localhost:3004/types`).then(responce => responce.data)
    },
    addType(obj) {
        return axios.post(`http://localhost:3004/types`, obj).then(response => response)
    },
    deleteType(id) {
        return axios.delete(`http://localhost:3004/types/${id}`).then(response => response)
    },
    editType(id, obj) {
        return axios.put(`http://localhost:3004/types/${id}`, obj).then(response => response)
    },
    getActiveType(value) {
        return axios.get(`http://localhost:3004/types?type=${value}`).then(response => response.data[0])
    },
    getTechnicsForType(value) {
        // const arrayToQuery = (property, arr) => {
        //     if ((arr[0] === "") || (arr.length === 0)) {
        //         return ``
        //     }
        //     else {
        //         return (arr.map(el => {
        //             return `&${property}=${el}`
        //         })).join('')
        //     }
        // }
        // let queryYears = arrayToQuery("year", years)
        // let buildsYears = arrayToQuery("korpus", builds)
        return axios.get(`http://localhost:3004/technics?type_like=${value}`).then(response => response.data)
    },
    getTechnicInfo(id) {
        return axios.get(`http://localhost:3004/technics/${id}`).then(response => response.data)
    },
    updateTechnic(id, data) {
        return axios.patch(`http://localhost:3004/technics/${id}`, data).then(response => response)
    },
    // id = "18", data = {date: "2019-01-01"}
    // id = "18", data = {print: true}
    getUsers() {
        return axios.get(`http://localhost:3004/users`).then(responce => responce.data)
    },
    getRooms() {
        return axios.get(`http://localhost:3004/technics`).then(responce => responce.data)
    },
    addUser(data) {
        return axios.post(`http://localhost:3004/users`,{name: data}).then(responce => responce.data)
    },
    getComments(id) {
        return axios.get(`http://localhost:3004/technics/${id}/comments`).then(responce => responce.data)
    },
    addComment(id, val) {
        return axios.post(`http://localhost:3004/technics/${id}/comments`, {
            "postId": id,
            "date": new Date(),
            "body": val
        }).then(responce => responce.data)
    },
    getTechnicsByRoom(room) {
        return axios.get(`http://localhost:3004/technics?room=${room}`).then(response => response.data)
    },
    addTechnic(data) {
        return axios.post(`http://localhost:3004/technics`, data).then(responce => responce.data)
    }
}
export const printersAPI = {
    getRefills(id) {
        return axios.get(`http://localhost:3004/technics/${id}/refills`).then(response => response.data)
    },
    getAllRefills() {
        return axios.get(`http://localhost:3004/refills`).then(response => response.data)
    },
    getCurrentRefills() {
        return axios.get(`http://localhost:3004/refillsCurrent/1`).then(response => response.data.arr)
    },
    getPrintersAll() {
        return axios.get(`http://localhost:3004/technics?type=Принтер&type=МФУ&type=Ксерокс`).then(response => response.data)
    },
    updateCurrentRefills(data) {
        let obj = {
            "arr": data
        }
        return axios.patch(`http://localhost:3004/refillsCurrent/1`,obj).then(response => response.data)
    }
}
