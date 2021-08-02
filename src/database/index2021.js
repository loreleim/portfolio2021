class Database {
  constructor() {
    this.projects = [
      {
        name: "ALA Tool",
        urlSlug: "ala",
        collab: "American Libraries Association",
        longTitle: "E-course Training Modules for ALA Transforming Community Initiative",
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
            content: "ALA approached us with a problem. Urban librarians wanted to organize events at their libraries. But many librarians felt they didn’t have the skills to plan one. Our challenge was to design a way to build confidence, offering librarians an insight to ways they could gain more or realize they already had event planning skills. ",
          },
          {
            type: "textarea", 
            title: "Research",
            backing: "01",
            content: "ALA approached us with a problem. Urban librarians wanted to organize events at their libraries. But many librarians felt they didn’t have the skills to plan one. Our challenge was to design a way to build confidence, offering librarians an insight to ways they could gain more or realize they already had event planning skills. ",
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
        longTitle: "How can you turn your passion into a purpose?",
        image: "../images/p2p.gif",
        link: "/convergence",
        github: "https://convergencedesignlab.org/",
        tags: "featured, fullstack",
        content: [
          {
            type: "tagsBlock", 
            content: "reactjs, react-router, gsap animations, firebase"
          },
          {
            type: "image", 
            link: "../images/p2p-09.jpg", 
            imgCaption: "testing"
          },
          {
            type: "textarea", 
            title: "Define missing UX Fundamentals",
            backing: "01",
            content: "When I boarded the project, there were considerable amounts of data already being collected for the project. (i.e. responses being collected via Firebase & Google Analytics) but minimal UX considerations were being made. Passion to Purpose faced problems of not fulfilling their user and audience needs.",
          },
          {
            type: "codesnippet",
            content: ""
          }
        ]
      },
      {
        name: "Training Modules",
        urlSlug: "orlrg",
        collab: "Pollinate x Oregon Lottery",
        longTitle: "A very long title",
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
        longTitle: "long long title",
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
        longTitle: "testing testing",
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
        longTitle: "testing this so much",
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
        longTitle: "a very long title",
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
        longTitle: "testing testing",
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
        longTitle: "chicken noodle soup",
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
        longTitle: "heheh xd",
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
        longTitle: "testomg tjos sp far",
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
        longTitle: "oh",
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
