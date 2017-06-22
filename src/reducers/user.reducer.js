import * as actionTypes from '../actions/action-types';

const initialState = {
    userId: "10158880318495445",
    name: "Andrzej",
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNlYm9va0lkIjoiMTAxNTg4ODAzMTg0OTU0NDUiLCJmaXJzdE5hbWUiOiJBbmRyemVqIiwiaW50ZXJlc3RzIjpbIlNwb3J0IiwiS3VsdHVyIiwiR2VuZXJlbGwiLCJQb2xpdGlrayIsIkRhbnMiLCJHZW5lcmVsdCJdLCJpYXQiOjE0OTgxMzMxMjUsImV4cCI6MTQ5ODIxOTUyNX0.erBW7mze60oYN7dizZ-z0DA21LNJrKuAmPeSpnmmYWQ",
    interests: ['Sport', 'Kultur', 'Generelt'],
    happenings: []
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

            return Object.assign({}, state, user);
        case actionTypes.USER_UPDATE_INTERESTS_SUCCEEDED:
            return Object.assign({}, state, { interests: action.interests });
        case actionTypes.USER_HAPPENINGS_FETCH_SUCCEEDED:
            return Object.assign({}, state, { happenings: action.happenings });
        default:
            return state;
    }
}