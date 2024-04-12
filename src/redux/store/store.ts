import {createStore, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk';
import CardReducer from "../reducer/reducers";


const store = createStore(CardReducer, compose(applyMiddleware(thunk)))
export default store;