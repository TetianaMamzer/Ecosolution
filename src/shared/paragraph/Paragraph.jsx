import css from "./paragraph.module.scss";

const Paragraph = ({text}) => {
  return (
    <p className={css.paragraph}>{text}</p>
  )
}

export default Paragraph;