import { createStore,compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
//import root reducer . every state will be having it's reducer
import rootReducer from './reducers/index';
//import data
import comments from './data/comments';
import posts from './data/posts'; 
//create an obj for default data;
const defaultData = {
    posts,
    comments
}
//reducer require default data and state                
const store = createStore(rootReducer,defaultData);
export const history = syncHistoryWithStore( browserHistory , store );
export default store;

