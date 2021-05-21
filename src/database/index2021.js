class Database {
  constructor() {
    this.projects = [
      {
        name: "Training Modules",
        collab: "Pollinate x Oregon Lottery",
        image: "../images/bus-01.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured, fullstack"
      },
      {
        name: "Passion to Purpose",
        collab: "Convergence Design Lab",
        image: "../images/bus-01.jpg",
        link: "/convergence",
        github: "https://convergencedesignlab.org/",
        tags: "featured, fullstack"
      },
      {
        name: "Wordpress Theme",
        collab: "Convergence Design Lab",
        image: "../images/bus-01.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured, wordpress"
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
        tags: "featured, fullstack"
      },
      {
        name: "lauAPI",
        collab: "json api of native plants",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "wip"
      },
      {
        name: "daBus",
        collab: "the bus hawai’i api + sso",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "wip"
      },
      {
        name: "greenhaus",
        collab: "firebase backend, sso",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "wip"
      },
    ]
  }
}

const store = new Database();
export default store;
