class Database {
  constructor() {
    this.projects = {
      Featured: [
        {
          name: "ALA Tool",
          collab: "American Libraries Association",
          image: "../images/bus-01.jpg",
          imageAlt: "thumbnail of ALA application",
          link: "/p2p",
          github: "https://convergencedesignlab.org/web-resources/passion-to-purpose/",
        },
        {
          name: "Passion to Purpose",
          collab: "Convergence Design Lab",
          image: "../images/bus-01.jpg",
          link: "/convergence",
          github: "https://convergencedesignlab.org/",
        },
        {
          name: "Training Modules",
          collab: "Pollinate x Oregon Lottery",
          image: "../images/bus-01.jpg",
          link: "/bus",
          github: "https://github.com/loreleim/da-bus",
        },
        {
          name: "Wordpress Theme",
          collab: "Convergence Design Lab",
          image: "../images/bus-01.jpg",
          link: "/bus",
          github: "https://github.com/loreleim/da-bus",
        },
        {
          name: "Annex Art Drop",
          collab: "Portland's Annex Art Drop",
          image: "../images/bus-01.jpg",
          link: "/bus",
          github: "https://github.com/loreleim/da-bus",
        },
        {
          name: "Research Anthology",
          collab: "Hawai'i Industry Survey 2020",
          image: "../images/hawaii.gif",
          link: "/hisurvey",
          github: "https://loreleim.github.io/hawaiisurvey/",
        },
      ],
    };
  }
}

const store = new Database();
export default store;
