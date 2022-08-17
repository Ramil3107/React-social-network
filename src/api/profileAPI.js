import { instance } from "./api"


export const profileAPI = {
    getUserData(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}