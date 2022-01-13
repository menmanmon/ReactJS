import { REQURST_STATUS } from "../utils/constants"

export const getChatsList = (state) => state.chats;
export const getMessagesList = (state) => state.messages;
export const getProfile = (state) => state.profile;
export const selectArticlesList = (state) => state.articles.articlesList;
export const selectArticlesLoading = (state) => state.articles.request.status === REQURST_STATUS.LOADING;
export const selectArticlesError = (state) => state.articles.request.error;
export const selectAuth = (state) => state.profile.authed;


