import PageContainer from "../../common/components/PageContainer/PageContainer"

import { IoMail, IoLogoGithub, IoLogoLinkedin   } from "react-icons/io5";

import css from "./ContactsPage.module.css";

const ContactPage = () => {
    return (
        <PageContainer title="Contacts" description="Contacts">
            <ul className={css.container}>
                <li className={css.listItem}>
                    <a href="mailto:elena.voyna@gmail.com" target="_blank" className={css.link}>
                    <IoMail className={css.icon}/>elena.voyna(at)gmail.com</a>
                </li>
                <li className={css.listItem}>
                    <a href="https://www.linkedin.com/in/olena-voina/" target="_blank" className={css.link}>
                    <IoLogoLinkedin  className={css.icon}/>LinkedIn</a>
                </li>
                <li className={css.listItem}>
                    <a href="https://github.com/olli20" target="_blank" className={css.link}>
                    <IoLogoGithub className={css.icon}/>GitHub</a>
                </li>
            </ul>
        </PageContainer>
    );
}

export default ContactPage;