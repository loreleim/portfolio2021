class Database {
  constructor() {
    this.workData = {
      ResourcesArray: [
        {
          name: "Modern Wireframes",
          medium: "PDF Printout",
          description: "this is a mockup for blank",
        },
      ],
      UXArray: [
        {
          name: "Facilitator's Guide",
          medium: "Stakeholder Guide",
          link: "page",
          description: "this is a mockup for blank",
        },
        {
          name: "The Bus Hawai'i",
          medium: "Case Study",
          link: "page",
          description: "this is a mockup for blank",
        },
        {
          name: "Equity Framework",
          medium: "Interactive PDFs",
          link: "page",
          description: "this is a mockup for blank",
        },
      ],
      ProgArray: [
        {
          name: "ALA Tool",
          medium: "React.js",
          link: "/ala",
          description: "this is a mockup for blank",
          github: "https://loreleim.github.io/alagame/",
        },
        {
          name: "Passion to Purpose",
          medium: "React.js",
          collab: "Convergence Design Lab",
          link: "/p2p",
          github: "https://convergencedesignlab.org/web-resources/passion-to-purpose/",
        },
        {
          name: "Wordpress Theme",
          medium: "React.js",
          link: "page",
          description: "this is a mockup for blank",
          github: "https://convergencedesignlab.org/",
        },
        {
          name: "Industry Survey",
          medium: "React w/ Google Sheets API",
          link: "page",
          description: "this is a mockup for blank",
          github: "https://loreleim.github.io/hawaiisurvey/",
        },
        {
          name: "Nettiquette AR",
          medium: "Unity & Vuforia",
          link: "page",
          description: "this is a mockup for blank",
          github: "https://github.com/loreleim/nettiquette-augmentedreality",
        },
        {
          name: "DaBus Hawai'i",
          medium: "React, Firebase & TheBus API",
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
          link: "/p2p",
          github: "https://convergencedesignlab.org/web-resources/passion-to-purpose/",
        },
        {
          name: "Wordpress Theme",
          collab: "Convergence Design Lab",
          link: "/convergence",
          github: "https://convergencedesignlab.org/",
        },
        {
          name: "Da Bus",
          collab: "The Bus Hawai'i",
          link: "/bus",
          github: "https://github.com/loreleim/da-bus",
        },
        {
          name: "Equity Framework",
          collab: "Chicago Public Schools",
          link: "/equity",
          github: "https://equity.cps.edu/",
        },
        {
          name: "Nettiquette Game",
          collab: "Augmented Reality",
          link: "/nettiquette",
          github: "https://github.com/loreleim/nettiquette-augmentedreality",
        },
        {
          name: "Research Anthology",
          collab: "Hawai'i Industry Survey 2020",
          link: "/hisurvey",
          github: "https://loreleim.github.io/hawaiisurvey/",
        },
      ],
    };
    this.details = {
      P2P: [
        {
          section: "introduction",
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
          title: "The Goal",
          subtext: "was to turn this",
        },
        {
          section: "goal",
          title: "Into This",
          subtext: "(a UX and Graphic overhaul)",
        },
        {
          section: "client",
          title: "Client Needs 01",
          subtext:
            "A style guide to inspire uniform design & consistency beyond our involvement",
        },
        {
          section: "client2",
          title: "Client Needs 02",
          subtext:
            "Visualization of their academic writing, which is both readable and digestable.",
        },
        {
          section: "client",
          title: "Client Needs 03",
          subtext:
            "Cross-Platform Design i.e. designs that would work in a PDF, on a powerpoint, and on a website.",
        },
        {
          section: "audience1",
          title: "Audience Needs 01",
          subtext:
            "As a parent, how does equity affect my child(ren), how can my child thrive in an equity based environment?",
        },
        {
          section: "audience2",
          title: "Audience Needs 02",
          subtext:
            "How can we, the community leaders, use equity to empower youth beyond the classroom?",
        },
        {
          section: "user1",
          title: "User Needs 01",
          subtext:
            "How can I, the educator, implement Equity in the classroom?",
        },
        {
          section: "user2",
          title: "User Needs 02",
          subtext:
            "How can we, the administration, empower teachers to use Equity based practices in the classroom and beyond?",
        },
        {
          section: "clientMap",
          title: "Client Map",
          subtext:
            "test",
        },
        {
          section: "userMap",
          title: "User Map",
          subtext:
            "test",
        },
        {
          section: "audienceMap",
          title: "Audience Map",
          subtext:
            "test",
        },
        {
          section: "lowFidel",
          title: "Low Fidelity",
          subtext:
            "Low fidel",
        },
        {
          section: "midFidel",
          title: "Mid Fidel",
          subtext:
            "text",
        },
        {
          section: "finalFidel",
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
