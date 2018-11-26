export function changeFirstName(newFirstName) {
    return {
        type: "CHANGE_FIRST_NAME",
        payload: newFirstName
    };
}

export function changeLastName(newLastName) {
    return {
        type: "CHANGE_LAST_NAME",
        payload: newLastName
    };
}

export function changeAge(newAge) {
    return {
        type: "CHANGE_AGE",
        payload: newAge
    };
}