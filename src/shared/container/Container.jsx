import css from "./container.module.scss";


const Container = ({ children,  id='home' }) => {
  return (
    <div className={css.container} id={id}>{children}</div>
  )
}

export default Container;