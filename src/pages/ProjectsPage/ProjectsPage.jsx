import {Link, useLocation} from 'react-router-dom';
import PageContainer from "../../common/components/PageContainer/PageContainer";
import PostContainer from "../../common/components/PostContainer/PostContainer";
import Button from '../../common/components/Button/Button';

import { TbChevronsRight } from "react-icons/tb";

import css from "./ProjectsPage.module.css";
import projectsData from '../../data/projectsData';

const ProjectsPage = () => {
    const location = useLocation();

    const projectsItems = projectsData.map(({id, title, description, image}) => (
        <li key={id} className={css.gridItem}>
            <PostContainer>
                <Link state={{from: location}} to={`/projects/${id}`}>
                    <img className={css.image} src={image}></img>
                </Link>
                <Link state={{from: location}} to={`/projects/${id}`}>
                    <h2 className={css.title}>{title}</h2>
                </Link>
                <Link state={{from: location}} to={`/projects/${id}`}>
                    <Button>Read more<TbChevronsRight/></Button>
                </Link>
            </PostContainer>
        </li>
    ))

    return (
        <PageContainer title="Recent projects" description="Projects">
            <ul className={css.grid}>
                {projectsItems}
            </ul>
        </PageContainer>
    );
}

export default ProjectsPage;