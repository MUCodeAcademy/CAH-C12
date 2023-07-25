import { LobbyProvider } from './LobbyContext';
import { UserProvider } from './UserContext';

export default function StateProvider(props) {
    return (
        <UserProvider>
            <LobbyProvider>
                {props.children}
            </LobbyProvider>
        </UserProvider>
    )
}