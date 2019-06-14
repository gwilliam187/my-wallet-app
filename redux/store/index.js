import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import FSStorage from 'redux-persist-expo-fs-storage';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: FSStorage(),
  // stateReconciler: autoMergeLevel2,
  blacklist: ['currTransaction', 'transactionsCurrMonth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
