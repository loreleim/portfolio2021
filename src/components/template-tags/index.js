import style from "./index.module.scss";

const TagTemplate = ({ passedData }) => {

  const tagArray = passedData.content.split(",")

  return (
    <div className={style.tagContainer}>
      {tagArray.map((item, itemIndex) => (
        <div className={style.individualTag} key={itemIndex}><p>{item}</p></div>
      ))}
    </div>
  );
};

export default TagTemplate;