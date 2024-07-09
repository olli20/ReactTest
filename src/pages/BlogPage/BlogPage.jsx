import {Link, useLocation} from 'react-router-dom';
import PageContainer from "../../common/components/PageContainer/PageContainer";
import PostContainer from "../../common/components/PostContainer/PostContainer";
import Button from '../../common/components/Button/Button';

import { TbChevronsRight } from "react-icons/tb";

import css from "./BlogPage.module.css";
import blogData from '../../data/blogData';


const BlogPage = () => {
    const location = useLocation();

    const blogItems = blogData.map(({id, title, text, date}) => (
        <li key={id} className={css.gridItem}>
            <PostContainer>
                <Link state={{from: location}} to={`/blog/${id}`}>
                    <h2 className={css.title}>{title}</h2>
                </Link>
                <span className={css.date}>{date}</span>
                <p className={css.description}>{text}</p>
                <Link state={{from: location}} to={`/blog/${id}`}>
                    <Button>Read more<TbChevronsRight/></Button>
                </Link>
            </PostContainer>
        </li>
    ))

    return (
        <PageContainer title="My latest news" description="Blog">
            <ul className={css.grid}>
                {blogItems}
            </ul>
        </PageContainer>
    );
}

export default BlogPage;