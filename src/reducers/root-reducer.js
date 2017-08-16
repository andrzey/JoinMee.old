import { combineReducers } from 'redux';
import user from './user.reducer';
import newHappening from './new-happening.reducer';
import happenings from './happening-list.reducer';
import selectedHappening from './selected-happening.reducer';
import pendingTasks from './pending-task.reducer';

const rootReducer = combineReducers({
    user,
    happenings,
    newHappening,
    selectedHappening,
    pendingTasks
});

export default rootReducer