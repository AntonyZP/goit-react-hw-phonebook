import { persistStore, persistReducer } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { contactsReducer } from "./contactSlice";
import { filterReducer } from './filterSlice'

  const contactReducer = combineReducers ({
    contacts: contactsReducer,
    filter: filterReducer
  })

  const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
  }

  export const persistedContactsReducer = persistReducer(persistConfig, contactReducer)

  export const store = configureStore({
    reducer: persistedContactsReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
export const persistor = persistStore(store)