import style from "./index.module.scss";

const TextAreaTemplate = ({ passedData }) => {
  return (
    <div className={style.textareaContainer}>
      <div className={style.headlines} style={passedData.backing ? {marginTop: "3rem"} : null}>
        <h2 className={passedData.tags ? style.subhead : null}>{passedData.title}</h2>
        <h2 className={style.backing}>{passedData.backing}</h2>
      </div>
      <div className={style.textContainer} style={passedData.backing ? {marginTop: "3rem"} : null}>
        <p>{passedData.content}</p>
      </div>
    </div>
  );
};

export default TextAreaTemplate;