import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { selectArticlesError, selectArticlesList, selectArticlesLoading } from "../../store/selectors";

export const Articles = () => {
    const articles = useSelector(selectArticlesList);
    const isLoading = useSelector(selectArticlesLoading);
    const error = useSelector(selectArticlesError);
    const dispatch = useDispatch();

    const requestArticles = async () => {
        dispatch(getArticles())
    }

    useEffect(() => {
        requestArticles();
    }, []);

    return (
        <>
            <h3>Articles</h3>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <button onClick={requestArticles}>REQUEST</button>
                    {error ? <h4>ERROR: {error}</h4> :
                        <ul>
                            {articles.map((art) => (
                                <li key={art.id}>{art.title}</li>
                            ))}
                        </ul>
                    }
                </>
            )}
        </>
    )
}