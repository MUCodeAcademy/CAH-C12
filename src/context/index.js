import { LobbyProvider } from './LobbyContext';
import { UserProvider } from './UserContext';
import { CardDisplayProvider } from './CardDisplayContext';
import { GameDisplayProvider } from './GamePageContext';
 
export default function StateProvider(props) {
    return (
        <UserProvider>
            <LobbyProvider>
               <CardDisplayProvider>
                {props.children}
              </CardDisplayProvider>
            </LobbyProvider>
        </UserProvider>
    )
}