import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { selectAuth } from "../../store/selectors"

export const PublicRoute = ({ children }) => {
    const authed = useSelector(selectAuth)
    return !authed ? children : <Navigate to="/chats" replace />
}