import {Link, NavLink} from "react-router-dom";

import menuItems from './menuItems';
import css from "./Navbar.module.css";

const getClassList = ({isActive}) => {
    const classList = (isActive ? `${css.link} ${css.active}` : css.link);
    return classList;
}

const Navbar = () => {
    const menu = menuItems.map(({id, to, text}) => (
        <li key={id} className={css.item}>
            <NavLink className={getClassList} to={to} >{text}</NavLink>     
        </li>
    ));

    return (
        <div className={css.navbar}>
            <nav className={css.navbarContainer}>
                <Link to={"/"} className={css.logo}>Olena Voina</Link>
                <ul className={css.menu}>
                    {menu}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;