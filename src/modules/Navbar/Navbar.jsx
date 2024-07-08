import {Link, NavLink} from "react-router-dom";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

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
            <div className={css.navbarContainer}>
                <nav className={css.menuContainer}>
                    <Link to={"/"} className={css.logo}>Olena Voina</Link>
                    <ul className={css.menu}>
                        {menu}
                    </ul>
                </nav>
                <ul className={css.media}>
                    <li><a href="https://github.com/olli20" target="blank"><IoLogoGithub className={css.icon}/></a></li>
                    <li><a href="https://www.linkedin.com/in/olena-voina/" target="blank"><IoLogoLinkedin className={css.icon}/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;