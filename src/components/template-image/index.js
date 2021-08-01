import style from "./index.module.scss";

const ImageTemplate = ({ passedData }) => {
  return (
    <div className={style.imageContainer}>
      <img src={passedData.link} alt={passedData.imgCaption}/>
    </div>
  );
};

export default ImageTemplate;