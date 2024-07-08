import {Link, useLocation} from 'react-router-dom';
import PageContainer from "../../common/components/PageContainer/PageContainer";
import PostContainer from "../../common/components/PostContainer/PostContainer";

import css from "./ProjectsPage.module.css";
import projectsData from '../../data/projectsData';

const ProjectsPage = () => {
    const location = useLocation();

    const projectsItems = projectsData.map(({id, title, description}) => (
        <li key={id}>
            <PostContainer>
                <h2>{title}</h2>
                <p>{description}</p>
                <Link state={{from: location}} to={`/projects/${id}`}>Read more</Link>
            </PostContainer>
        </li>
    ))

    return (
        <PageContainer title="Recent web-projects" description="Projects">
            <ul className={css.projectsGrid}>
                {projectsItems}
            </ul>
        </PageContainer>
    );
}

export default ProjectsPage;