const defaultState = {
    user: { username: 'Andrzej' }
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }

}