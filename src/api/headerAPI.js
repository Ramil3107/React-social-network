import { instance } from "./api"


export const headerAPI = {
    getAuthUserData(userId) {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}