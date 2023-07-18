import { UserProvider } from './UserContext';

export default function StateProvider(props) {
    return (
        <UserProvider>
            {props.children}
        </UserProvider>
    )
}