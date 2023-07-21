import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    
    return (
        <nav>
            <ul>
            <li> <Link to="/">Login</Link></li>
                <li> <Link to="/register">Register</Link></li>
                {/* <li> <Link to="/lobby">Lobby</Link></li>
                <li> <Link to="/game">Game</Link></li> */}

            </ul>
        </nav>
    )
}
export default Menu;
