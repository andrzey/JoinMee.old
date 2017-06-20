import * as actionTypes from '../actions/action-types';

const initialState = {
    userId: "10158880318495445",
    name: "Andrzej",
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNlYm9va0lkIjoiMTAxNTg4ODAzMTg0OTU0NDUiLCJmaXJzdE5hbWUiOiJBbmRyemVqIiwiaW50ZXJlc3RzIjpbXSwiaWF0IjoxNDk3OTU0MzExLCJleHAiOjE0OTgwNDA3MTF9.ycztLw8LXGsU8JqtvdRrvICinVZ4d7pHKYi1w3mZuAU",
    interests: []
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_FETCH_SUCCEEDED:

            const user = {
                userId: action.user.facebookId,
                name: action.user.firstName,
                accessToken: action.accessToken,
                interests: action.user.interests
            }

            return Object.assign({}, state, user)
        case actionTypes.USER_UPDATE_INTERESTS_SUCCEEDED:
            return Object.assign({}, state, { interests: action.interests });
        default:
            return state;
    }
}