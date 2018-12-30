import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'remote-redux-devtools';
import formReducers from './reducers/formReducers';
import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, formReducers);

export let store = createStore(persistedReducer, composeWithDevTools());
export let persistor = persistStore(store)