class Database {
  constructor() {
    this.projects = [
      {
        name: "Training Modules",
        collab: "Pollinate x Oregon Lottery",
        image: "../images/bus-01.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured"
      },
      {
        name: "Passion to Purpose",
        collab: "Convergence Design Lab",
        image: "../images/bus-01.jpg",
        link: "/convergence",
        github: "https://convergencedesignlab.org/",
        tags: "fullstack"
      },
      {
        name: "Training Modules",
        collab: "Pollinate x Oregon Lottery",
        image: "../images/bus-01.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured"
      },
      {
        name: "Wordpress Theme",
        collab: "Convergence Design Lab",
        image: "../images/bus-01.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured"
      },
      {
        name: "Annex Art Drop",
        collab: "Portland's Annex Art Drop",
        image: "../images/bus-01.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured"
      },
      {
        name: "Research Anthology",
        collab: "Hawai'i Industry Survey 2020",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "featured"
      },
    ]
  }
}

const store = new Database();
export default store;