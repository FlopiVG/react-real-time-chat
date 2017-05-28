import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ChatReducer from './chat-reducer';

const rootReducer = combineReducers({
    chat: ChatReducer,
    form: formReducer
});

export default rootReducer;