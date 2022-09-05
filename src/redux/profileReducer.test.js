import profileReducer, { addPostActionCreator, setUserProfile, toggleIsFetching } from "./profileReducer";


let state = {
    posts: [
        { id: 1, message: "Hi guys, how r u?", likecounter: 11 },
        { id: 2, message: "Props?? What is it?", likecounter: 15 },
        { id: 3, message: "React Kabzda forever", likecounter: 23 },
        { id: 4, message: "Today is tuesday or wednesday?", likecounter: 5 }
    ],
    userProfile: null,
    isFetching: true,
    userStatus: ""
}

test('add post reducer working correct', () => {

    // 1. test data
    let action = addPostActionCreator("new post")

    // 2. action
    let newState = profileReducer(state, action)


    // 3. expectation

    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].message).toBe("new post")
    expect(newState.posts[4].likecounter).toBe(0)
    expect(newState.posts[4].id).toBe(5)
});

test('set user profile reducer working correct', () => {

    // 1. test data
    let action = setUserProfile("Ramik")

    // 2. action
    let newState = profileReducer(state, action)


    // 3. expectation

    expect(newState.userProfile).toBe("Ramik")
});
test('set toogle is fetching reducer working correct', () => {

    // 1. test data
    let action = toggleIsFetching(false)

    // 2. action
    let newState = profileReducer(state, action)


    // 3. expectation

    expect(newState.isFetching).toBe(false)
});
