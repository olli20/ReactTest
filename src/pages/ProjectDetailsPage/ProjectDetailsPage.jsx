import {useCallback} from 'react';
import {useParams, useNavigate, useLocation} from 'react-router-dom';
import { TbChevronLeft } from "react-icons/tb";
import Button from '../../common/components/Button/Button';
import PageContainer from "../../common/components/PageContainer/PageContainer"

import projectsData from '../../data/projectsData';

const ProjectDetailsPage = () => {
    const {projectId} = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";
    
    const goBack = useCallback(() => navigate(from), [from, navigate]);

    const projectData = projectsData.find(({ id }) => id === projectId);

    return (
        <PageContainer title={projectData.title} description="projects">
            <Button onClick={goBack}><TbChevronLeft/>Go back</Button>
            <div>{projectData.text}</div>
        </PageContainer>
    )
}

export default ProjectDetailsPage;