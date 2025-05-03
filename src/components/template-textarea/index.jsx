const TextAreaTemplate = ({ passedData }) => {
  return (
    <div className="mt-8">
      <div className={`relative ${passedData.backing ? "mt-12" : ""}`}>

        <h2 className={`font-bold ${passedData.tags === 'subhead' ? "text-[16px] tracking-wide uppercase" : passedData.tags === "header" ? "text-2xl" : null}`}>
          {passedData.title}
        </h2>
        
        {/*If there's a number in the background*/}
        {passedData.backing && (
          <h2 style={{ WebkitTextStroke: '1px #ff77c6' }} className="text-transparent absolute text-[5rem] z-[-3] top-0 transform -translate-y-[40%] opacity-50">
            {passedData.backing}
          </h2>
        )}
      </div>
      <div className={`${passedData.backing ? "mt-12" : ""}`}>
        {passedData.content && <p className="mt-4">{passedData.content}</p>}
      </div>
    </div>
  );
};

export default TextAreaTemplate;
