import css from "./PageContainer.module.css"

const PageContainer = ({title, description, children}) => {
    return (
        <section className={css.container}>
            {title && description && <span className={css.description}>{description}</span>}
            {title && <h1 className={css.title}>{title}</h1>}
            {children}
        </section>
    )
}

export default PageContainer;