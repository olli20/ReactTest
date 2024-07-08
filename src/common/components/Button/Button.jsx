import css from './Button.module.css';

const Button = ({onClick = null, type = "button", children}) => {
    return (
        <>
            {Boolean(onClick) && <button className={css.button} onClick={onClick} type={type}>{children}</button>}
            {!Boolean(onClick) && <button className={css.button} type={type}>{children}</button>}
        </>
    )
}

export default Button;