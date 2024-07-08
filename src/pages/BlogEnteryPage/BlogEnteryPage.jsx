import {useCallback} from 'react';
import {useParams, useNavigate, useLocation} from 'react-router-dom';
import { TbChevronLeft } from "react-icons/tb";
import Button from '../../common/components/Button/Button';
import PageContainer from "../../common/components/PageContainer/PageContainer"

import blogData from '../../data/blogData';

const BlogEnteryPage = () => {
    const {blogId} = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    const goBack = useCallback(() => navigate(from), [from, navigate]);

    const enteryData = blogData.find(({ id }) => id === blogId);

    return (
        <PageContainer title={enteryData.title} description="blog">
            <Button onClick={goBack}><TbChevronLeft/>Go back</Button>
            <div>{enteryData.text}</div>
        </PageContainer>
    )
}

export default BlogEnteryPage;