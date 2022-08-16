import { instance } from "./api"


export const usersAPI = {

    getUsers(currentPage, pageUsersLimit) {
        return instance.get(`users?page=${currentPage}&count=${pageUsersLimit}`)
            .then(response => response.data)
    },

    getPageUsers(page, pageUsersLimit) {
        return instance.get(`users?page=${page}&count=${pageUsersLimit}`)
            .then(response => response.data)
    },

    getUser(findUserName) {
        return instance.get(`users?term=${findUserName}`)
            .then(response => response.data)
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}
