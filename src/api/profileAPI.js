import { instance } from "./api"


export const profileAPI = {

    getUserData(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
            .then(response => response.data)
    }
}