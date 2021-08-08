import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.nav__item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.nav__item}><NavLink to="/feed" activeClassName={s.active}>Feed</NavLink></li>
                <li className={s.nav__item}><NavLink to="/chats" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.nav__item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.nav__item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;