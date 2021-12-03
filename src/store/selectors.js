import { REQURST_STATUS } from "../utils/constants"

export function getChatsList(state) {
    return state.chats
}

export function getMessagesList(state) {
    return state.messages
}

export function getPrifile(state) {
    return state.profile
}

export function selectArticlesList(state) {
    return state.articles.articlesList
}

export function selectArticlesLoading(state) {
    return state.articles.request.status === REQURST_STATUS.LOADING 
}

export function selectArticlesError(state) {
    return state.articles.request.error
}