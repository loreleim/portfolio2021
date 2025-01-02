import spclThumbail from "../images/projects/spcl-thumbnail.gif";
import unThumbnail from "../images/projects/un-thumbnail.png";
import orlThumbnail from "../images/projects/orl-map-thumbnail.png";

class Database {
  constructor() {
    this.projects = [
      {
        name: "Specialized Custom Waterbottles",
        urlSlug: "specialized",
        collab: "Specialized x Spectrum",
        description: "A Shopify x Customizer experience, including an Azure Functions' Order Acknowledgement integration",
        image: spclThumbail,
        imageAlt: "thumbnail of the specialized custom waterbottles experience",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        finalLink: "https://specializedcustom.com/",
        tags: "featured, fullstack, dev", 
        content: [
          {
            type: "tagsBlock", 
            content: "liquid, shopify, azure functions, admin customizations"
          },
          {
            type: "image", 
            link: spclThumbail, 
            imgCaption: "ALA game overview"
          },
          {
            type: "quicklinks",
            firstText: "View Site", 
            firstLink: "https://specializedcustom.com/",
          },
          {
            type: "textarea", 
            title: "Last updated Oct 2024",
            content: "project breakdown coming soon",
          },
          /*{
            type: "textarea", 
            title: "My Role",
            content: "Integration Engineer",
            tags: "subhead"
          },
          {
            type: "textarea", 
            title: "Timeline",
            content: "October 2023 - January 2024",
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
          }*/
         {
          type: "spacer"
         }
        ]
      },
      {
        name: "Retailer Map",
        urlSlug: "oregonlottery",
        collab: "Pollinate x Oregon Lottery",
        description: "A Shopify x Customizer experience, including an Azure Functions' Order Acknowledgement integration",
        image: orlThumbnail,
        imageAlt: "thumbnail of the specialized custom waterbottles experience",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        finalLink: "https://www.oregonlottery.org/retailer/where-to-play/",
        tags: "featured, fullstack, dev", 
        content: [
          {
            type: "tagsBlock", 
            content: "ux-design, wordpress, maui-net, cross-platform"
          },
          {
            type: "image", 
            link: orlThumbnail, 
            imgCaption: "ALA game overview"
          },
          {
            type: "quicklinks",
            firstText: "View Site", 
            firstLink: "https://www.oregonlottery.org/retailer/where-to-play/",
            //secondText: "Github",
            //secondLink: "https://github.com/loreleim/alagame"
          },
          {
            type: "textarea", 
            title: "Last updated Oct 2024",
            content: "project breakdown coming soon...",
          },
          /*{
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
          }*/
          {
            type: "spacer"
          }
        ]
      },
      {
        name: "Milestone Tracker",
        urlSlug: "unhbcu",
        collab: "Uncle Nearest Whiskey",
        description: "A Shopify x Customizer experience, including an Azure Functions' Order Acknowledgement integration",
        image: unThumbnail,
        imageAlt: "thumbnail of the specialized custom waterbottles experience",
        link: "/bus",
        github: "https://github.com/loreleim/da-bus",
        finalLink: "https://www.oregonlottery.org/retailer/where-to-play/",
        tags: "featured, fullstack, dev", 
        content: [
          {
            type: "tagsBlock", 
            content: "wordpress, advanced-custom-fields"
          },
          {
            type: "image", 
            link: unThumbnail, 
            imgCaption: "ALA game overview"
          },
          {
            type: "quicklinks",
            firstText: "View Site", 
            firstLink: "https://ltcquiz.ala.org/",
            //secondText: "Github",
            //secondLink: "https://github.com/loreleim/alagame"
          },
          {
            type: "textarea", 
            title: "Last updated Oct 2024",
            content: "project breakdown coming soon...",
          },
          /*{
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
          }*/
          {
            type: "spacer"
          }
        ]
      },
    ]
  }
}

const store = new Database();
export default store;
