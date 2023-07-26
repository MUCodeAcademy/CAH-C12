import React, { useMemo } from 'react';
import LoginPage from './LoginPage';
import LobbyPage from './LobbyPage';
import GamePage from './GamePage';
import { useUserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const withAuthentication = (WrappedComponent, requiresUser) => {
    return (props) => {
        const { user } = useUserContext();

        const redirectTo = useMemo(() => (requiresUser ? "/" : "/register"), []);

        const authorized = useMemo(() => {
            return (!requiresUser && !user) || (requiresUser && user);
        }, [user]);

        if (authorized) {
            return <WrappedComponent {...props} />
        }

        return <Navigate to={redirectTo} />
    }
}

export const LoginPageWithAuth = withAuthentication(LoginPage, false);
export const GamesPageWithAuth = withAuthentication(GamePage, true);
export const LobbyPageWithAuth = withAuthentication(LobbyPage, true);