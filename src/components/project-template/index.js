import React from "react";
import style from "./index.module.scss";
import { useParams } from "react-router-dom";
import store from "../../database/index2021";
import TextAreaTemplate from "../template-textarea";
import CollabTemplate from "../template-collab";

function findMatchingObject(name) {
  return store.projects
    .filter((passedItem) => passedItem.urlSlug === name)
    .map((passedItem) => passedItem);
}

function checkType(passedObject) {

  if (passedObject.type === "card") {
    console.log("this is a card");
    return <TextAreaTemplate passedData={passedObject} />;
  }

  if (passedObject.type === "collabBlock") {
    return <CollabTemplate passedData={passedObject} />;
  }
}

export default function ProjectTemplate() {
  let { projectId } = useParams();
  let projectInfo = findMatchingObject(projectId);

  return (
    <div className={style.projectContainer}>
      <h1>{projectInfo[0].name}</h1>
      {projectInfo[0].content.map((item, itemIndex) => (
        <div key={itemIndex}>{checkType(item)}</div>
      ))}
    </div>
  );
}