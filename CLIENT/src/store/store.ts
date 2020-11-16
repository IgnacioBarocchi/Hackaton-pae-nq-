/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createStore, Store } from 'redux';
import { collection } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import { ideasReducer } from './reducer/ideasReducer';

type storeT = Store<
    collection,
    {
        type: string;
        payload: collection | number;
    }
>;

const store: storeT = createStore(
    ideasReducer,
    /* eslint-disable no-underscore-dangle */
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
