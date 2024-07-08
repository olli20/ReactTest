import css from "./PostContainer.module.css";

const PostContainer = ({children}) => {
    return (
        <article className={css.container}>
            {children}
        </article>
    );
}

export default PostContainer;