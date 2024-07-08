import {Link, useLocation} from 'react-router-dom';
import PageContainer from "../../common/components/PageContainer/PageContainer";
import PostContainer from "../../common/components/PostContainer/PostContainer";

import css from "./BlogPage.module.css";
import blogData from '../../data/blogData';


const BlogPage = () => {
    const location = useLocation();

    const blogItems = blogData.map(({id, title, text, date}) => (
        <li key={id}>
            <PostContainer>
                <h2>{title}</h2>
                <p>{date}</p>
                <div>{text}</div>
                <Link state={{from: location}} to={`/blog/${id}`}>Read more</Link>
            </PostContainer>
        </li>
    ))

    return (
        <PageContainer title="My latest news" description="Blog">
            <ul className={css.blogGrid}>
                {blogItems}
            </ul>
        </PageContainer>
    );
}

export default BlogPage;