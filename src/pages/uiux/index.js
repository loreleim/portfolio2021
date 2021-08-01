import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import store from "../../database/index2021";

export default function UiUx() {

  const [filteredProjects, setfilteredProjects] = useState([]);
  const [databaseProjects] = useState(store.projects);
  const [pageTitle, setPageTitle] = useState("Featured");

  useEffect(() => {
    const filterFirst = () => {
      const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("featured" && "ui") || passedItem.tags.includes("featured" && "ux"));
      setfilteredProjects(onlyInclude);
    }
    filterFirst();
    // eslint-disable-next-line
  }, []);

  function onResetArray() {
    const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("featured" && "ui") || passedItem.tags.includes("featured" && "ux"));
    setfilteredProjects(onlyInclude);
    setPageTitle("Featured")
  };

  function filterUI() {
    const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("ui"));
    setfilteredProjects(onlyInclude);
    setPageTitle("UI")
  };

  function filterUX() {
    const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("ux"));
    setfilteredProjects(onlyInclude);
    setPageTitle("UX")
  };

  return (
      <div>
        <Helmet>
          <title>UI / UX</title>
          <meta name="description" content="Lorelei Miyamura's UI and UX Work"/>
        </Helmet>
        <section className={style.workContainer}>
          <h1>{pageTitle}</h1>
          <div className={style.filterContainer}>
            <button onClick={()=> onResetArray()} className={pageTitle=== "Featured" ? style.selected: ""}>Featured</button>
            <button onClick={()=> filterUI()} className={pageTitle=== "UI" ? style.selected: ""}>UI</button>
            <button onClick={()=> filterUX()}  className={pageTitle=== "UX" ? style.selected: ""}>UX</button>
          </div>
          <ProjectRender databaseProjects={filteredProjects.length > 0 ? filteredProjects : databaseProjects} />
        </section>
      </div>

  );
}

const ProjectRender = ({ databaseProjects }) => {
  return databaseProjects.map((individualProject, i) => 
  <Link to={`/projects/${individualProject.urlSlug}`}>
  <section key={individualProject.name} className={style.projectCard}>
      <div className={style.imageCrop}>
        <img src={individualProject.image} alt='thumbnail of project'/>
      </div>
      <div className={style.overlay}></div>
      <div className={style.projectDetails}>
        <h4>{individualProject.name}</h4>
        <h5>{individualProject.collab}</h5>
      </div>
  </section>
  </Link>);
};