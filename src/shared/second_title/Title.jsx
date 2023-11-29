import css from "./title.module.scss";

const Title = ({text}) => {
  return (
    <h2 className={css.title}>{text}</h2>
  )
}

export default Title;