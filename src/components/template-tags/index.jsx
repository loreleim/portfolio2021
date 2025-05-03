const TagTemplate = ({ passedData }) => {
  const tagArray = passedData.content.split(",");

  return (
    <div className="flex mt-4 mb-4 w-full overflow-y-scroll scrollbar-hide">
      {tagArray.map((item, itemIndex) => (
        <div className="mr-4 flex-shrink-0" key={itemIndex}>
          <p className="text-[10px] py-2 px-4 text-[#58a6ff] bg-[rgba(56,139,253,0.1)] rounded-full">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TagTemplate;