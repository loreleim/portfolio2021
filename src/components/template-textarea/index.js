import style from "./index.module.scss";

const TextAreaTemplate = ({ passedData }) => {
  return (
    <div className={style.textareaContainer}>
      <h2>{passedData.title}</h2>
      <div className={style.textContainer}>
        <p>{passedData.content}</p>
      </div>
    </div>
  );
};

export default TextAreaTemplate;