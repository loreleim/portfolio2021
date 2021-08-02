import React from "react";
import style from "./index.module.scss";
import { useParams } from "react-router-dom";
import store from "../../database/index2021";
import TextAreaTemplate from "../template-textarea";
import ImageTemplate from "../template-image";
import TagTemplate from "../template-tags";

function findMatchingObject(name) {
  return store.projects
    .filter((passedItem) => passedItem.urlSlug === name)
    .map((passedItem) => passedItem);
}

function checkType(passedObject) {

  if (passedObject.type === "textarea") {
    return <TextAreaTemplate passedData={passedObject} />;
  }

  if (passedObject.type === "image") {
    return <ImageTemplate passedData={passedObject} />;
  }

  if(passedObject.type === "tagsBlock") {
    return <TagTemplate passedData={passedObject} />
  }
}

export default function ProjectTemplate() {
  let { projectId } = useParams();
  let projectInfo = findMatchingObject(projectId);

  return (
    <div className={style.projectContainer}>
      <h1>{projectInfo[0].longTitle}</h1>
      {projectInfo[0].content.map((item, itemIndex) => (
        <div key={itemIndex}>{checkType(item)}</div>
      ))}
      <div className={style.spacer}></div>
    </div>
  );
}