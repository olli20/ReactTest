import {useCallback} from 'react';
import {useParams, useNavigate, useLocation} from 'react-router-dom';
import { TbChevronsLeft } from "react-icons/tb";
import { IoLogoGithub, IoEarthSharp  } from "react-icons/io5";

import Button from '../../common/components/Button/Button';
import PageContainer from "../../common/components/PageContainer/PageContainer"

import css from "./ProjectDetailsPage.module.css";

import projectsData from '../../data/projectsData';

const ProjectDetailsPage = () => {
    const {projectId} = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";
    
    const goBack = useCallback(() => navigate(from), [from, navigate]);

    const projectData = projectsData.find(({ id }) => id === projectId);

    const {title, image, gallery, description, skills, live, git, text} = projectData;

    return (
        <PageContainer title={title} description="projects">
            <div className={css.container}>
                <div>
                    <p className={css.description}>{description}</p>
                    <div className={css.text}>{text}</div>
                    <ul className={css.linksContainer}>
                        <li><a href={git} target="blank" className={css.link}>
                            <IoLogoGithub className={css.icon}/>Github</a>
                        </li>
                        <li><a href={live} target="blank" className={css.link}>
                            <IoEarthSharp className={css.icon}/>Live website</a>
                        </li>
                    </ul>
                    <Button onClick={goBack}><TbChevronsLeft/>Go back</Button>
                </div>
                {image && <img src={image} className={css.image}></img>}
            </div>
        </PageContainer>
    )
}

export default ProjectDetailsPage;