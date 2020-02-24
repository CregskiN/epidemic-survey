import { combineReducers } from "redux";

import { reducer as registrateReducer } from '../pages/registrate/store/index.js';
import { reducer as managementReducer } from '../pages/management/store/index.js';

const reducers = combineReducers({
    registrate: registrateReducer,
    management: managementReducer,
    
});

export default reducers;