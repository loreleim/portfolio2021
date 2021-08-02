import style from "./index.module.scss";

const Quicklinks = ({ passedData }) => {
  return (
    <div className={style.quicklinksContainer}>
      <button onClick={()=> console.log("test")}>{passedData.firstText}</button>
      {passedData.secondText ? <button onClick={()=> console.log("test")}>{passedData.secondText}</button> : null}
    </div>
  );
};

export default Quicklinks;