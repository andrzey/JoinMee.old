import { combineReducers } from 'redux';
import user from './user.reducer';
import happenings from './happening-list.reducer';
import selectedHappening from './selected-happening.reducer';

const rootReducer = combineReducers({
    user,
    happenings,
    selectedHappening
});

export default rootReducer