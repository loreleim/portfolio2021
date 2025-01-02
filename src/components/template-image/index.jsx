import Image from "next/image";

const ImageTemplate = ({ passedData }) => {
  return (
    <div className="imageContainer">
      <Image src={passedData.link} alt={passedData.imgCaption}></Image>
    </div>
  );
};

export default ImageTemplate;