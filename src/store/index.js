import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { chatsReduser } from './chats/reduser';
import { messagesReduser } from './messages/reduser';
import { profileReducer } from './profile/reducer';
import { persistStore, persistReducer } from 'redux-persist';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
    key: 'gbMessages',
    storage,
}

const presistedReducer = persistReducer(config, combineReducers({
    profile: profileReducer,
    chats: chatsReduser,
    messages: messagesReduser,
}))

export const store = createStore(presistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);