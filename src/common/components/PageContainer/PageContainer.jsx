
import css from "./PageContainer.module.css"

const PageContainer = ({title, children}) => {
    return (
        <section className={css.container}>
            {title && <h1 className={css.title}>{title}</h1>}
            {children}
        </section>
    )
}

export default PageContainer;