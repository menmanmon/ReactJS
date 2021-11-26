import { v4 } from "uuid";
import { AUTHORS } from "../../utils/constants";

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

export const addMessageWithThunk = (newMessageInfo) => (dispatch) => {
    dispatch(addMessage(newMessageInfo));

    if (newMessageInfo.author !== 'bot') {
        setTimeout(() => {
            const botMessageInfo = {
                author: AUTHORS.bot,
                text: 'hi from bot',
                messageId: v4,
                chatId: newMessageInfo.chatId
            };
            dispatch(addMessage(botMessageInfo))
        }, 1500);
    }
}