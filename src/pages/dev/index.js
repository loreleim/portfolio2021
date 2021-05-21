import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import {Helmet} from "react-helmet";
import store from "../../database/index2021";

export default function Dev() {

  const [filteredProjects, setfilteredProjects] = useState([]);
  const [databaseProjects] = useState(store.projects);
  const [pageTitle, setPageTitle] = useState("Featured");

  useEffect(() => {
    const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("featured"));
    setfilteredProjects(onlyInclude);
  }, []);

  function onResetArray() {
    const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("featured"));
    setfilteredProjects(onlyInclude);
    setPageTitle("Featured")
  };

  function filterFullstack() {
    const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("fullstack"));
    setfilteredProjects(onlyInclude);
    setPageTitle("Fullstack")
  };

  function filterWIP() {
    const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("wip"));
    setfilteredProjects(onlyInclude);
    setPageTitle("WIP")
  };

  return (
      <div>
        <Helmet>
          <title>Development</title>
          <meta name="description" content="Lorelei Miyamura's Development Work"/>
        </Helmet>
        <section className={style.workContainer}>
          <h1>{pageTitle}</h1>
          <div className={style.filterContainer}>
            <button onClick={()=> onResetArray()} className={pageTitle=== "Featured" ? style.selected: ""}>Featured</button>
            <button onClick={()=> filterFullstack()} className={pageTitle=== "Fullstack" ? style.selected: ""}>Fullstack</button>
            <button onClick={()=> filterWIP()}  className={pageTitle=== "WIP" ? style.selected: ""}>WIP</button>
          </div>
          <ProjectRender databaseProjects={filteredProjects.length > 0 ? filteredProjects : databaseProjects} />
        </section>
      </div>

  );
}

const ProjectRender = ({ databaseProjects }) => {
  return databaseProjects.map((a, i) => 
  <section key={a.name} className={style.projectCard}
  onClick={(event) => {
    event.preventDefault();
    window.open(a.github);
  }}>
      <div className={style.imageCrop}>
        <img src={a.image} alt='thumbnail of project'/>
      </div>
      <div className={style.overlay}></div>
      <div className={style.projectDetails}>
        <h4>{a.name}</h4>
        <h5>{a.collab}</h5>
      </div>
  </section>);
};