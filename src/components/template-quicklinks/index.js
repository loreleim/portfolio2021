import style from "./index.module.scss";

const Quicklinks = ({ passedData }) => {
  return (
    <div className={style.quicklinksContainer}>
      <button onClick={(e)=> {e.preventDefault();window.open(`${passedData.firstLink}`, "_blank");}}>{passedData.firstText}	&#8594;</button>
      {passedData.secondText ? <button onClick={()=> console.log("test")}>{passedData.secondText} &#8594;</button> : null}
    </div>
  );
};

export default Quicklinks;