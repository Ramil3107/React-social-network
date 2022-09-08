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
    },
    uploadPhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    }
}