const TextAreaTemplate = ({ passedData }) => {
  return (
    <div className="textareaContainer">
      <h1>{passedData.title}</h1>
      <div className="individualCard">
        <p>{passedData.content}</p>
      </div>
    </div>
  );
};

export default TextAreaTemplate;