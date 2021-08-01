import style from "./index.module.scss";

const CollabTemplate = ({ passedData }) => {
  return (
    <div className={style.collabContainer}>
      <div className={style.collabImg}>
        <img src={passedData.logo} alt={passedData.imgCaption} />
      </div>
      <div className={style.collabText}>
        <p className={style.client}>{passedData.client}</p>
        <p>{passedData.date}</p>
      </div>
    </div>
  );
};

export default CollabTemplate;