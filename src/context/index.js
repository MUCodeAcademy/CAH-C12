import { UserProvider } from './UserContext';
import { CardDisplayProvider } from './CardDisplayContext';
import { GameDisplayProvider } from './GamePageContext';
 
export default function StateProvider(props) {
    return (
        <UserProvider>
            <CardDisplayProvider>
                {props.children}
            </CardDisplayProvider>
        </UserProvider>
    )
}