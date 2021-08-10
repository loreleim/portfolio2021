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
        tags: "featured, fullstack, dev", 
        content: [
          {
            type: "tagsBlock", 
            content: "reactjs, quiz-game, conditional-rendering, spread-operator"
          },
          {
            type: "image", 
            link: "../images/ala-0.jpg", 
            imgCaption: "ALA game overview"
          },
          {
            type: "quicklinks",
            firstText: "View Site", 
            firstLink: "https://ltcquiz.ala.org/",
            secondText: "Github",
            secondLink: "https://github.com/loreleim/alagame"
          },
          {
            type: "textarea", 
            title: "The Challenge",
            content: "ALA approached us with a problem. Urban librarians wanted to organize events at their libraries. But many of them felt they didn’t have skills to plan one. Our challenge was to design a solution that would build event planning confidence amongst librarians.",
          },
          {
            type: "textarea", 
            title: "My Role",
            content: "UI Designer & React Developer",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Timeline",
            content: "Jan - March 2021",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Infrastructure",
            backing: "01",
            content: "The ALA team was in the midst of switching Content Management Systems from Drupal to Wordpress. Thus, we had to utilize a system that could be utilized in either serverspace. We chose to develop a React.js microsite, where it could live in a subdomain under the new Wordpress allocation."
          },
          {
            type: "textarea", 
            title: "UI Design",
            backing: "02",
            content: "This project kicked off with UI and flow considerations. I sketched, designed and presented UI layouts to help viz the experience. These were then approved by our client.",
          },
          {
            type: "textarea", 
            title: "Wireframes",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Mid Fidelity Wireframes",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Architecture",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Features & Development",
            backing: "03",
            content: "We approached this experience with our audience’s existing quiz schemas. Following the love of personality quizzes by our intended audience -- 30-40 year old urban librarians -- I designed a small web tool that functioned similarly to BuzzFeed or Facebook personality quizzes.",
          },
          {
            type: "textarea", 
            content: "I utilized the following features for this tool:",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Multidimensional Database",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Conditional rendering & styling",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Calculating results",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Rendering Categories",
            backing: "03",
            content: "This tool stores all questions, responses, and categories within a multidimensional database. Meaning score calculation could occur simultaneously as the user clicks through options. The nature of the quiz was to “select all that apply”. Meaning some questions could be left blank and that the quiz may be submitted at any time. The multidimensional database complimented the dynamic flow of the application.",
          },
          {
            type: "textarea", 
            title: "Conditional rendering & styling",
            backing: "04",
            content: "Conditional styling was necessary for button clicks.",
          },
          {
            type: "codesnippet",
            content: ""
          }
        ]
      },
      {
        name: "Passion to Purpose",
        urlSlug: "p2pdev",
        collab: "Convergence Design Lab",
        longTitle: "How can you turn your passion into a purpose?",
        image: "../images/p2p.gif",
        link: "/convergence",
        github: "https://convergencedesignlab.org/",
        tags: "featured, fullstack, dev",
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
            title: "Overview",
            backing: "01",
            content: "When I boarded the project, there were considerable amounts of data already being collected for the project. (i.e. responses being collected via Firebase & Google Analytics) but minimal UX considerations were being made. Passion to Purpose faced problems of not fulfilling their user and audience needs.",
          },
          {
            type: "textarea", 
            title: "Timeline",
            content: "April 2019 - April 2020",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "My Role",
            content: "UX Designer & React Developer",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Accessibility Overhaul",
            backing: "02",
            content: "something about accessibility",
          },
          {
            type: "image", 
            link: "../images/p2p-01.jpg", 
            imgCaption: "testing"
          },
          {
            type: "textarea", 
            title: "Firebase",
            backing: "03",
            content: "something about accessibility",
          },
          {
            type: "image", 
            link: "../images/p2p-07.jpg", 
            imgCaption: "testing"
          },
          {
            type: "textarea", 
            title: "Confetti",
            backing: "04",
            //content: "something about accessibility",
          },
          {
            type: "image", 
            link: "../images/p2p.gif", 
            imgCaption: "testing"
          },
          {
            type: "textarea", 
            title: "GSAP Animation",
            backing: "05",
            content: "something about accessibility",
          },
          {
            type: "textarea", 
            title: "The Outcome",
            backing: "06",
            content: "something about accessibility",
          },
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
        tags: "featured, fullstack, dev",
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
        tags: "featured, ux, ui",
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
        name: "Passion to Purpose",
        urlSlug: "p2pux",
        collab: "Convergence Design Lab",
        longTitle: "How can you turn your passion into a purpose?",
        image: "../images/p2p-09.jpg",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "ux, ui, featured",
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
            type: "textarea", 
            title: "What could be done?",
            content: "In a 4-step process, I detailed a design process that highlighted the potential users/players' needs. From this user research, we would extend the current app into user testing sessions which would further provide insight into the redesign of the Passion to Purpose tool.",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "CLARIFYING USER VS. AUDIENCE",
            content: "In the current state of the tool, Passion to Purpose was designed as a linear flow. Where players entered into the app, answering prompts and then juxtaposing their answers.",
            tags: "subhead"
          },
        ]
      },
      {
        name: "Wireframes PDF",
        urlSlug: "wireframespdf",
        collab: "Printable worksheets",
        longTitle: "How can you turn your passion into a purpose?",
        image: "../images/p2p-09.jpg",
        link: "/hisurvey",
        github: "https://loreleim.github.io/hawaiisurvey/",
        tags: "resources",
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
            type: "textarea", 
            title: "What could be done?",
            content: "In a 4-step process, I detailed a design process that highlighted the potential users/players' needs. From this user research, we would extend the current app into user testing sessions which would further provide insight into the redesign of the Passion to Purpose tool.",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "CLARIFYING USER VS. AUDIENCE",
            content: "In the current state of the tool, Passion to Purpose was designed as a linear flow. Where players entered into the app, answering prompts and then juxtaposing their answers.",
            tags: "subhead"
          },
        ]
      },
    ]
  }
}

const store = new Database();
export default store;
