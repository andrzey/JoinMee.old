import { combineReducers } from 'redux';
import user from './user.reducer';
import happenings from './happening-list.reducer';

const rootReducer = combineReducers({
    user,
    happenings
});

export default rootReducer