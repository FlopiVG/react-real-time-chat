export const SEND_CHAT = 'send_chat';
export const SET_NAME = 'set_name';



export function sendChat(message) {
    return {
        type: SEND_CHAT,
        payload: message
    }
}

export function setName(name) {
    return {
        type: SET_NAME,
        payload: name
    }
}