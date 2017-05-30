export const SEND_CHAT = 'send_chat';



export function sendChat(message) {
    return {
        type: SEND_CHAT,
        payload: message
    }
}