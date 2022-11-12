import { persistFilterConfig } from './persistConfig';
import persistReducer from 'redux-persist/es/persistReducer';
import filter from '../contacts/contactsFilter';

export const persistorFilterReducer = persistReducer(
    persistFilterConfig,
    filter
)