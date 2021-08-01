import React from "react";
import { useParams } from "react-router-dom";
import store from "../../database/index2021";
import CardTemplate from "../card-template";

function findMatchingObject(name) {
  return store.projects
    .filter((passedItem) => passedItem.urlVersion === name)
    .map((passedItem) => passedItem);
}

function checkType(passedObject) {

  if (passedObject.type === "card") {
    console.log("this is a card");
    return <CardTemplate passedData={passedObject} />;
  }
}

export default function DogTemplate() {
  let { projectId } = useParams();
  let projectInfo = findMatchingObject(projectId);

  return (
    <div>
      <h1>{projectInfo[0].name}</h1>
      <h2>Tags: {projectInfo[0].tags}</h2>
      {projectInfo[0].content.map((item, itemIndex) => (
        <div key={itemIndex}>{checkType(item)}</div>
      ))}
    </div>
  );
}