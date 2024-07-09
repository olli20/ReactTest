import { useState } from "react";
import PageContainer from "../../common/components/PageContainer/PageContainer"

import { IoMail, IoLogoGithub, IoLogoLinkedin   } from "react-icons/io5";

import css from "./ContactsPage.module.css";
import PostContainer from "../../common/components/PostContainer/PostContainer";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...formData
            })
        })
            .then(() => alert("Success!"))
            .catch((error) => alert(error));
    };


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
            <PostContainer>
                <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>
                            Your Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message: <textarea name="message" value={formData.message} onChange={handleChange} />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </PostContainer>
        </PageContainer>
    );
}

export default ContactPage;