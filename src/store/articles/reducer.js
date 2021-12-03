import { REQURST_STATUS } from "../../utils/constants";
import { REQUEST_ARTICLES_LOADING, REQUEST_ARTICLES_SUCCESS, REQUEST_ARTICLES_FAILURE } from "./actions"

const initialArticles = {
    articlesList: [],
    request: {
        status: REQURST_STATUS.IDLE,
        error: '',
    }
};

export const articlesReduser = (state = initialArticles, { type, payload }) => {
    switch (type) {
        case REQUEST_ARTICLES_LOADING:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQURST_STATUS.LOADING,
                }
            };
        case REQUEST_ARTICLES_SUCCESS:
            return {
                ...state,
                articlesList: payload,
                request: {
                    error: '',
                    status: REQURST_STATUS.SUCCESS,
                }
            };
        case REQUEST_ARTICLES_FAILURE:
            return {
                ...state,
                articlesList: payload,
                request: {
                    error: payload,
                    status: REQURST_STATUS.FAILURE,
                }
            };
        default:
            return state;
    }
}