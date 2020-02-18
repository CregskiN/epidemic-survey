import { createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk) // 处理异步action 如setTimeout
    )
);

export default store;

