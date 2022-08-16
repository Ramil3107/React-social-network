import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "1df7d983-3005-46cd-8eb5-6ebedb11cc88"
    }
})


export const getUsers = (currentPage, pageUsersLimit) => {
    return instance.get(`users?page=${currentPage}&count=${pageUsersLimit}`,
        {
            withCredentials: true
        }).
        then(response => response.data)
}


export const getPageUsers = (page, pageUsersLimit) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageUsersLimit}`,
        {
            withCredentials: true
        }).
        then(response => response.data)
}

export const getUser = (findUserName) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?term=${findUserName}`, {
        withCredentials: true
    }).
        then(response => response.data)
}