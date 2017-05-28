import {
    SEND_CHAT
} from 'actions/chat-action';

export default (state = [], action) => {

    switch (action.type) {
    case SEND_CHAT:
        return [...state, action.payload]
    default:
        return state;
    }
}