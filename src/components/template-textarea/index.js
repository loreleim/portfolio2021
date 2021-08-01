const CardTemplate = ({ passedData }) => {
  return (
    <div className="cardsContainer">
      <div className="individualCard">
        <p>{passedData.content}</p>
      </div>
    </div>
  );
};

export default CardTemplate;