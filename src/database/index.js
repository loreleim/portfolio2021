class Database {
  constructor() {
    this.workData = {
      ResourcesArray: [
        {
          name: "Modern Wireframes",
          medium: "PDF Printout",
          image: require("../images/wireframes-0.jpg"),
          link: require("../images/ModernWireframes.pdf"),
          description: "this is a mockup for blank",
        },
      ],
      UXArray: [
        {
          name: "Facilitator's Guide",
          medium: "Stakeholder Guide",
          image: require("../images/p2p-08.jpg"),
          link: "page",
          description: "this is a mockup for blank",
        },
        {
          name: "The Bus Hawai'i",
          medium: "Case Study",
          image: require("../images/bus-thumbnail.jpg"),
          link: "page",
          description: "this is a mockup for blank",
        },
        {
          name: "Equity Framework",
          medium: "Interactive PDFs",
          image: require("../images/equity-thumbnail.jpg"),
          link: "page",
          description: "this is a mockup for blank",
        },
      ],
      ProgArray: [
        {
          name: "ALA Tool",
          medium: "React.js",
          image: require("../images/ala-0.jpg"),
          link: "/ala",
          description: "this is a mockup for blank",
          github: "https://loreleim.github.io/alagame/",
        },
        {
          name: "Passion to Purpose",
          medium: "React.js",
          collab: "Convergence Design Lab",
          image: require("../images/p2p.gif"),
          link: "/p2p",
          github: "https://convergencedesignlab.org/web-resources/passion-to-purpose/",
        },
        {
          name: "Wordpress Theme",
          medium: "React.js",
          image: require("../images/cdlmockup-thumb.jpg"),
          link: "page",
          description: "this is a mockup for blank",
          github: "https://convergencedesignlab.org/",
        },
        {
          name: "Industry Survey",
          medium: "React w/ Google Sheets API",
          image: require("../images/hawaii.gif"),
          link: "page",
          description: "this is a mockup for blank",
          github: "https://loreleim.github.io/hawaiisurvey/",
        },
        {
          name: "Nettiquette AR",
          medium: "Unity & Vuforia",
          image: require("../images/nett-thumbnail.gif"),
          link: "page",
          description: "this is a mockup for blank",
          github: "https://github.com/loreleim/nettiquette-augmentedreality",
        },
        {
          name: "DaBus Hawai'i",
          medium: "React, Firebase & TheBus API",
          image: require("../images/bus-thumbnail.jpg"),
          link: "page",
          description: "this is a mockup for blank",
          github: "https://github.com/loreleim/da-bus",
        },
      ],
    };
    this.projects = {
      Featured: [
        {
          name: "Passion to Purpose",
          collab: "Convergence Design Lab",
          image: require("../images/p2p.gif"),
          link: "/p2p",
          github: "https://convergencedesignlab.org/web-resources/passion-to-purpose/",
        },
        {
          name: "Wordpress Theme",
          collab: "Convergence Design Lab",
          image: require("../images/cdlmockup-thumb.jpg"),
          link: "/convergence",
          github: "https://convergencedesignlab.org/",
        },
        {
          name: "Da Bus",
          collab: "The Bus Hawai'i",
          image: require("../images/bus-thumbnail.jpg"),
          link: "/bus",
          github: "https://github.com/loreleim/da-bus",
        },
        {
          name: "Equity Framework",
          collab: "Chicago Public Schools",
          image: require("../images/equity-thumbnail.jpg"),
          link: "/equity",
          github: "https://equity.cps.edu/",
        },
        {
          name: "Nettiquette Game",
          collab: "Augmented Reality",
          image: require("../images/nett-thumbnail.gif"),
          link: "/nettiquette",
          github: "https://github.com/loreleim/nettiquette-augmentedreality",
        },
        {
          name: "Research Anthology",
          collab: "Hawai'i Industry Survey 2020",
          image: require("../images/hawaii.gif"),
          link: "/hisurvey",
          github: "https://loreleim.github.io/hawaiisurvey/",
        },
      ],
    };
    this.details = {
      P2P: [
        {
          section: "introduction",
          image: require("../images/cdlmockup-thumb.jpg"),
          text: "this is a mockup for blank",
        },
        {
          section: "details",
          title: "Project Overview",
          text:
            "dissolving barriers to entry for reading and implementing equitable practices.",
        },
      ],
      daBus: [
        {
          projectOverview: "something",
          timeline: "2 weeks",
          role: "UX Designer",
          words: "The Bus is a supplemental website for the public transit system located on Oahu, Hawai’i. The site serves as a database of information. Including announcements, real time bus arrivals, timetables, and information about fares; functioning as a bulletin board of updated information.",
        }
      ],
      Equity: [
        {
          section: "goal",
          image: require("../images/equity-01.jpg"),
          title: "The Goal",
          subtext: "was to turn this",
        },
        {
          section: "goal",
          image: require("../images/equity-02.jpg"),
          title: "Into This",
          subtext: "(a UX and Graphic overhaul)",
        },
        {
          section: "client",
          image: require("../images/equity-03.jpg"),
          title: "Client Needs 01",
          subtext:
            "A style guide to inspire uniform design & consistency beyond our involvement",
        },
        {
          section: "client2",
          image: require("../images/equity-03.jpg"),
          title: "Client Needs 02",
          subtext:
            "Visualization of their academic writing, which is both readable and digestable.",
        },
        {
          section: "client",
          image: require("../images/equity-05.jpg"),
          title: "Client Needs 03",
          subtext:
            "Cross-Platform Design i.e. designs that would work in a PDF, on a powerpoint, and on a website.",
        },
        {
          section: "audience1",
          image: require("../images/equity-05.jpg"),
          title: "Audience Needs 01",
          subtext:
            "As a parent, how does equity affect my child(ren), how can my child thrive in an equity based environment?",
        },
        {
          section: "audience2",
          image: require("../images/equity-05.jpg"),
          title: "Audience Needs 02",
          subtext:
            "How can we, the community leaders, use equity to empower youth beyond the classroom?",
        },
        {
          section: "user1",
          image: require("../images/equity-06.jpg"),
          title: "User Needs 01",
          subtext:
            "How can I, the educator, implement Equity in the classroom?",
        },
        {
          section: "user2",
          image: require("../images/equity-06.jpg"),
          title: "User Needs 02",
          subtext:
            "How can we, the administration, empower teachers to use Equity based practices in the classroom and beyond?",
        },
        {
          section: "clientMap",
          image: require("../images/equity-07.jpg"),
          title: "Client Map",
          subtext:
            "test",
        },
        {
          section: "userMap",
          image: require("../images/equity-07.jpg"),
          title: "User Map",
          subtext:
            "test",
        },
        {
          section: "audienceMap",
          image: require("../images/equity-07.jpg"),
          title: "Audience Map",
          subtext:
            "test",
        },
        {
          section: "lowFidel",
          image: require("../images/equity-07.jpg"),
          title: "Low Fidelity",
          subtext:
            "Low fidel",
        },
        {
          section: "midFidel",
          image: require("../images/equity-07.jpg"),
          title: "Mid Fidel",
          subtext:
            "text",
        },
        {
          section: "finalFidel",
          image: require("../images/equity-07.jpg"),
          title: "Two emails later...",
          subtext:
            "Designs are client approved!",
        },
      ],
    };
  }
}

const store = new Database();
export default store;
