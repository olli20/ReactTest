import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { IoLogoGithub, IoLogoLinkedin, IoMenu, IoClose } from "react-icons/io5";

import menuItems from './menuItems';
import css from "./Navbar.module.css";

const getClassList = ({isActive}) => {
    const classList = (isActive ? `${css.link} ${css.active}` : css.link);
    return classList;
}

const Navbar = () => {
    const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

    useEffect(() => {
        if (mobileMenuVisibility) {
            disableBodyScroll(document);
        } else {
            enableBodyScroll(document);
        }
    }, [mobileMenuVisibility]);

    const menu = menuItems.map(({ id, to, text }) => (
        <li key={id} className={css.item}>
            <NavLink className={getClassList} to={to} onClick={() => setMobileMenuVisibility(false)}>
                {text}
            </NavLink>
        </li>
    ));

    const toggleMenu = () => {
        setMobileMenuVisibility(!mobileMenuVisibility);
    }

    return (
        <>
            <div className={css.navbar}>
                <div className={css.navbarContainer}>
                    <Link to={"/"} className={css.logo}>Olena Voina</Link>
                    <nav className={css.menuContainer}>
                        <ul className={css.menu}>
                            {menu}
                        </ul>
                    </nav>
                    <ul className={css.media}>
                        <li><a href="https://github.com/olli20" target="_blank" rel="noopener noreferrer"><IoLogoGithub className={css.icon} /></a></li>
                        <li><a href="https://www.linkedin.com/in/olena-voina/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className={css.icon} /></a></li>
                    </ul>
                    <button type="button" className={css.menuButton} onClick={toggleMenu}>
                        <IoMenu className={css.icon} />
                    </button>
                </div>
            </div>
            {mobileMenuVisibility &&
                <div className={css.mobileMenu}>
                    <button type="button" className={css.closeButton} onClick={toggleMenu}>
                        <IoClose className={css.closeIcon} />
                    </button>
                    <nav>
                        <ul className={css.mobileMenuList}>
                            {menu}
                        </ul>
                    </nav>
                    <ul className={css.mobileMedia}>
                        <li><a href="https://github.com/olli20" target="_blank" rel="noopener noreferrer"><IoLogoGithub className={css.icon} /></a></li>
                        <li><a href="https://www.linkedin.com/in/olena-voina/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className={css.icon} /></a></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Navbar;