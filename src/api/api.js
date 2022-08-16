import * as axios from "axios"

export const API_URL = `https://social-network.samuraijs.com/api/1.0/`
export const API_KEY = "1df7d983-3005-46cd-8eb5-6ebedb11cc88"

export const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        "API-KEY": API_KEY
    }
})

