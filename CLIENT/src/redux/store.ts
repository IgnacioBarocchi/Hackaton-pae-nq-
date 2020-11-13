// @ts-ignore
import { createStore } from 'redux';
import { ideasReducer } from './reducer/ideasReducer';
//@ts-ignore
const store = createStore(ideasReducer);
export default store;
