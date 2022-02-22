import '../view/Nav.scss';
import {  NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink exact activeClassName="active" to="/" >Covid</NavLink>
            <NavLink to="/timer">Timer App</NavLink>
            <NavLink to="/todo">Todo App</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div>
    );
}

export default Nav;