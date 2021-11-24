import { combineReducers, createStore } from 'redux';
import { chatsReduser } from './chats/reduser';
import { messagesReduser } from './messages/reduser';
import { profileReducer } from './profile/reducer';

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReduser,
        messages: messagesReduser,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);