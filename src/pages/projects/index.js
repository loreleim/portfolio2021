import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import store from "../../database/index2021";

export default function Projects() {

  const [filteredProjects, setfilteredProjects] = useState([]);
  const [databaseProjects] = useState(store.projects);
  const [pageTitle, setPageTitle] = useState("Projects");

  useEffect(() => {
    const filterFirst = () => {
      const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("featured") && (passedItem.tags.includes("fullstack") || passedItem.tags.includes("wip")));
      setfilteredProjects(onlyInclude);
    }
    filterFirst();
    // eslint-disable-next-line
  }, []);

  function onResetArray() {
    const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("featured") && (passedItem.tags.includes("fullstack") || passedItem.tags.includes("wip")));
    setfilteredProjects(onlyInclude);
    setPageTitle("Projects")
  };

  function filterDev() {
    const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("fullstack"));
    setfilteredProjects(onlyInclude);
    setPageTitle("Dev")
  };

  function filterUIUX() {
    const onlyInclude = databaseProjects.filter((passedItem) => passedItem.tags.includes("wip"));
    setfilteredProjects(onlyInclude);
    setPageTitle("UI/UX")
  };

  return (
      <div>
        <Helmet>
          <title>Projects</title>
          <meta name="description" content="Lorelei Miyamura's Development Work"/>
        </Helmet>
        <section className={style.workContainer}>
          <h1>{pageTitle}</h1>
          <div className={style.filterContainer}>
            <button onClick={()=> onResetArray()} className={pageTitle=== "Featured" ? style.selected: ""}>Featured</button>
            <button onClick={()=> filterDev()} className={pageTitle=== "Dev" ? style.selected: ""}>Dev</button>
            <button onClick={()=> filterUIUX()}  className={pageTitle=== "UI/UX" ? style.selected: ""}>UI/UX</button>
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