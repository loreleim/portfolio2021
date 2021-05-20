# Portfolio 2021
Built different


## Failures and Successes

<details>
  <summary>Version 2021 FAIL</summary>
  
  ```
          {store.projects.map((projects) => {
            if (projects.tags.includes(this.state.selectedTag)) {
              return <section key={projects.name} className={style.projectCard}
              onClick={(event) => {
                event.preventDefault();
                window.open(projects.github);
              }}>
                  <div className={style.imageCrop}>
                    <img src={projects.image} alt='thumbnail of project'/>
                  </div>
                  <div className={style.overlay}></div>
                  <div className={style.projectDetails}>
                    <h4>{projects.name}</h4>
                    <h5>{projects.collab}</h5>
                  </div>
              </section>;
            } else {}
            return <div></div>
          })}
  ```
</details>
