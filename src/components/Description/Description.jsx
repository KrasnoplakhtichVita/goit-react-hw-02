import css from "./Descriptions.module.css";

const Description = ({ name, description }) => {
  return (
    <div className={css.description}>
      <h1 className={css.title}>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Description;
