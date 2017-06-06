import {
    SEND_CHAT,
    SET_NAME
} from 'actions/chat-action';

const INITIAL_STATE = {
    messages: [],
    name: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SEND_CHAT:
        return { ...state, messages: [...state.messages, action.payload]};
    case SET_NAME:
        return { ...state, ...action.payload };
    default:
        return state;
    }
}