class Database {
  constructor() {
    this.projects = [
      {
        name: "ALA Tool",
        urlSlug: "ala",
        collab: "American Libraries Association",
        image: "../images/ala-0.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured, fullstack", 
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
      {
        name: "Passion to Purpose",
        urlSlug: "passiontopurpose",
        collab: "Convergence Design Lab",
        image: "../images/p2p.gif",
        link: "/convergence",
        github: "https://convergencedesignlab.org/",
        tags: "featured, fullstack"
      },
      {
        name: "Training Modules",
        urlSlug: "orlrg",
        collab: "Pollinate x Oregon Lottery",
        image: "../images/bus-01.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured, fullstack"
      },
      {
        name: "Annex Art Drop",
        urlSlug: "annexartdrop",
        collab: "Portland's Annex Art Drop",
        image: "../images/bus-01.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured"
      },
      {
        name: "Industry Survey",
        urlSlug: "hawaiisurvey",
        collab: "Paginated Survey to Google Sheets",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "featured, fullstack"
      },
      {
        name: "Wordpress Theme",
        urlSlug: "cdltheme",
        collab: "Convergence Design Lab",
        image: "../images/cdlmockup-thumb.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured, wordpress"
      },
      {
        name: "lauAPI",
        urlSlug: "lauapi",
        collab: "json api of native plants",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "wip"
      },
      {
        name: "daBus",
        urlSlug: "dabus",
        collab: "the bus hawai’i api + sso",
        image: "../images/bus-01.jpg",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "wip"
      },
      {
        name: "greenhaus",
        urlSlug: "greenhaus",
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
