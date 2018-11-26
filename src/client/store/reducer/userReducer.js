const userReducer = (state = {
    firstName: "Kumkum",
    lastName: "Sharma",
    age: 23
}, action) => {
    switch (action.type) {
        case "CHANGE_FIRST_NAME":
            state = {
                ...state,
                firstName: action.payload
            };
            break;
        case "CHANGE_LAST_NAME":
            state = {
                ...state,
                lastName: action.payload
            };
            break;
        case "CHANGE_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break;
        default:
            break;
    }
    return state;
}

export default userReducer;