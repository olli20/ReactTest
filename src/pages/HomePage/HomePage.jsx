import {Link} from 'react-router-dom';

import PageContainer from "../../common/components/PageContainer/PageContainer";
import PostContainer from "../../common/components/PostContainer/PostContainer";

import css from "./HomePage.module.css";

const HomePage = () => {
    return (
        <PageContainer title="Welcome to My Online Portfolio" description="Welcome">
            <PostContainer>
            <div className={css.intro}>
                <p>I am glad to have you here!</p>
                <p>This space is dedicated to highlighting my journey and work as a frontend developer.</p> 
                <p>Focused on mastering new skills and best practices, I aim to deliver innovative and efficient 
                web solutions. Here, you can explore my latest projects in the <Link to={"/projects"} className={css.link}>Projects section</Link> and keep 
                up with my insights and updates in the <Link to={"/blog"} className={css.link}>Blog section</Link>.</p>
                <p>If you have questions or collaboration proposals, please feel free to <Link to={"/contact"} className={css.link}>contact me</Link>.</p>
            </div>
            </PostContainer>
        </PageContainer>
    )
}

export default HomePage;