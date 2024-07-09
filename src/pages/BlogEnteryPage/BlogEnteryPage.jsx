import {useCallback} from 'react';
import {useParams, useNavigate, useLocation} from 'react-router-dom';
import Button from '../../common/components/Button/Button';
import PageContainer from "../../common/components/PageContainer/PageContainer"

import { TbChevronsLeft } from "react-icons/tb";
import { IoLogoGithub, IoEarthSharp  } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

import css from "./BlogEnteryPage.module.css";

import blogData from '../../data/blogData';

const BlogEnteryPage = () => {
    const {blogId} = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    const goBack = useCallback(() => navigate(from), [from, navigate]);

    const enteryData = blogData.find(({ id }) => id === blogId);

    const {title, date, text, image, live, git, file} = enteryData;

    let links = null;
    if (live || git || file) {
        links = (
            <ul className={css.linksContainer}>
                {live &&
                    <li><a href={live} target="_blank" className={css.link}>
                        <IoEarthSharp className={css.icon}/>Live Website</a>
                    </li>
                }
                {git && 
                    <li><a href={git} target="_blank" className={css.link}>
                        <IoLogoGithub className={css.icon}/>GitHub</a>
                    </li>
                }
                {file && 
                    <li><a href={file} target="_blank" className={css.link}>
                        <FaLink className={css.icon}/>Link</a>
                    </li>
                }
            </ul>
        );
    }

    return (
        <PageContainer title={title} description="blog">
        <div className={css.container}>
            <div>
                <span className={css.date}>{date}</span>
                <div className={css.text}>{text}</div>
                {links && links}
                <Button onClick={goBack}><TbChevronsLeft/>Go back</Button>
            </div>
            {image && <img src={image} className={css.image}></img>}
        </div>
    </PageContainer>
    )
}

export default BlogEnteryPage;