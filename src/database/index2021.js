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
            type: "tagsBlock", 
            content: "reactjs, quiz-game, conditional-rendering, spread-operator"
          },
          {
            type: "image", 
            link: "../images/ala-0.jpg", 
            imgCaption: "testing"
          },
          {
            type: "textarea", 
            title: "The Challenge",
            content: "ALA approached us with a problem. Urban librarians wanted to host community events, but many of them felt they didn’t have the skills to plan one. Our challenge was to design a way to build librarian confidence. Offering them insight in ways they could gain more or realize they already had event planning skills. ",
          },
          {
            type: "card",
            content: "this is a test of information"
          },
          {
            type: "codesnippet",
            content: ""
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
        tags: "featured, fullstack",
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
      {
        name: "Training Modules",
        urlSlug: "orlrg",
        collab: "Pollinate x Oregon Lottery",
        image: "../images/bus-01.jpg",
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
        name: "Annex Art Drop",
        urlSlug: "annexartdrop",
        collab: "Portland's Annex Art Drop",
        image: "../images/bus-01.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "featured",
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
      {
        name: "Industry Survey",
        urlSlug: "hawaiisurvey",
        collab: "Paginated Survey to Google Sheets",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "featured, fullstack",
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
      {
        name: "Wordpress Theme",
        urlSlug: "cdltheme",
        collab: "Convergence Design Lab",
        image: "../images/cdlmockup-thumb.jpg",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        tags: "wordpress",
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
      {
        name: "lauAPI",
        urlSlug: "lauapi",
        collab: "json api of native plants",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "wip",
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
      {
        name: "daBus",
        urlSlug: "dabus",
        collab: "the bus hawai’i api + sso",
        image: "../images/bus-01.jpg",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "wip",
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
      {
        name: "greenhaus",
        urlSlug: "greenhaus",
        collab: "firebase backend, sso",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "wip",
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
      {
        name: "UI + Featured",
        urlSlug: "uitest",
        collab: "firebase backend, sso",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "ui, featured",
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
      {
        name: "UX + Featured",
        urlSlug: "uitest",
        collab: "firebase backend, sso",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "ux, featured",
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
      {
        name: "UX Only",
        urlSlug: "uitest",
        collab: "firebase backend, sso",
        image: "../images/hawaii.gif",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "ux",
        content: [
          {
            type: "card",
            content: "this is a test of information"
          }
        ]
      },
    ]
  }
}

const store = new Database();
export default store;
