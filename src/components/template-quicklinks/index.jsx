"use client"; 

const Quicklinks = ({ passedData }) => {
  return (
    <div className="quicklinksContainer mt-4">
      <button className="mr-4 text-[.5rem] tracking-wide pt-2 pb-2 px-5 border-[1px] border-[var(--theme-black)] dark:border-white rounded-full uppercase hover:bg-[var(--theme-pink)] hover:border-[var(--theme-pink)]" onClick={(e)=> {e.preventDefault();window.open(`${passedData.firstLink}`, "_blank");}}>{passedData.firstText}	&#8594;</button>
      {passedData.secondText ? <button className="text-[.5rem] tracking-wide pt-2 pb-2 px-5 border-[1px] border-[var(--theme-black)] dark:border-white rounded-full uppercase hover:bg-[var(--theme-pink)] hover:border-[var(--theme-pink)]">{passedData.secondText} &#8594;</button> : null}
    </div>
  );
};

export default Quicklinks;