import { UserProvider } from './UserContext';
import { CardDisplayProvider } from './CardDisplayContext';

export default function StateProvider(props) {
    return (
        <UserProvider>
            <CardDisplayProvider>
                {props.children}
            </CardDisplayProvider>
        </UserProvider>
    )
}