export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_EMPTY_MESSAGE = "MESSAGES::ADD_EMPTY_MESSAGE"

export const addMessage = (newMessageInfo) => ({
    type: ADD_MESSAGE,
    payload: newMessageInfo,
})
export const addEmptyMessage = (ChatId) => ({
    type: ADD_EMPTY_MESSAGE,
    payload: ChatId,
})
