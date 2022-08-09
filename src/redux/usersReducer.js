const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"


let initialState = {
    users: [
        {
            id: 1,
            avatarUrl: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
            isFollow:true,
            fullName: "Abbasov R.",
            status: "I'm looking for a job now",
            country: "Ukraine",
            city: "Kharkiv"
        },
        {
            id: 2,
            avatarUrl: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
            isFollow:true,
            fullName: "Yevsyukova A.",
            status: "Designer/Traveler",
            country: "Ukraine",
            city: "Kharkiv"
        },
        {
            id: 3,
            avatarUrl: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
            isFollow:true,
            fullName: "Velichko R.",
            status: "I'm retard",
            country: "Ukraine",
            city: "Kharkiv"
        },
    ]
}

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users:state.users.map(user => {
                   if(user.id === action.userId) {
                        return user.isFollow = true
                    } else {
                        return user
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state, users:state.users.map(user => {
                   if(user.id === action.userId) {
                        return user.isFollow = true
                    } else {
                        return user
                    }
                })
            }
        default:
            return state
    }


}


export const followActionCreator = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId: userId })

export default usersReducer