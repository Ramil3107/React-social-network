import { instance } from "./api"


export const authAPI = {
    getAuthUserData(userId) {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    signInRequest(email,password,rememberMe) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe
        })
            .then(response => response.data)
    },
    logoutRequest(email,password,rememberMe) {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}