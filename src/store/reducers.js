import {combineReducers} from "redux";

import { reducer as registrateReducer} from '../pages/registrate/store/index.js';


const reducers = combineReducers({
    registrate: registrateReducer,
    
});

export default reducers;