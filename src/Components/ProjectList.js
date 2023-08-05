import React  from "react";
import projectVP from "../Assets/Images/groupProjectVacationPlanner.png";
import projectDP from '../Assets/Images/dayPlannerApp.png';
import projectPG from "../Assets/Images/passwordGeneratorApp.png";
import projectWD from "../Assets/Images/weatherDashboard.png";
import projectMM from "../Assets/Images/mindManagedApp.png";
import projectFR from "../Assets/Images/frienemies.png";
import Project from "../Components/Project";



const ProjectList = () => {
   
    const projectDetails = [
      {
        id: 1,
        name: "Mind Managed Application",
        img: projectMM,
        techStack:
          "HTML, CSS3, Bootstrap, HTML, Javascript, MongoDB, Express, Axios, ReactJS, Node.js, openFDA API, Recharts, Auth0",
        gitHubURL: "https://github.com/damiandeleon/project-3-group-8",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://obscure-beyond-60909.herokuapp.com/",
        deployTitle: "Deployed Project",
        description:
          "Mental Health / mood monitoring app.  Using Axios to send HTTP requests to REST endpoints and perform CRUD operations, so user can journal and track medications.  The app also uses the openFDA API to search for medications. ",
      },
      {
        id: 2,
        name: "Frienemies App",
        img: projectFR,
        techStack:
          "HTML, CSS3, Bootstrap, HTML, Handlebars, Javascript, NPM Packages: Cloudinary, MySQL2, sequelize, bcrypt",
        gitHubURL: "https://github.com/damiandeleon/project-2-group-3",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://damp-thicket-88352.herokuapp.com/login",
        deployTitle: "Deployed Project",
        description:
          "Frenemies connects people with nothing in common, giving them a chance to learn new things from each other. NPM packages used: Cloudinary (for uploading images), MySQL for saving user info, friends list, and user interests",
      },
      {
        id: 3,
        name: "Vacation Planner Application",
        img: projectVP,
        techStack:
          "HTML, CSS3, Javascript, Bulma, Open Weather API, Zomato API",
        gitHubURL: "https://github.com/damiandeleon/vacation_planner/",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://damiandeleon.github.io/vacation_planner/",
        deployTitle: "Deployed Project",
        description:
          "A user with no imagination may need help with planning a vacation.  Vacation Planner does that.  The app presents the user with choices of vacation destinations.  Based on what destination is selected, the vacation planner will display the weather in that vacation spot as well as some interesting places to eat.  This is accomplished through API calls.",
      },
      {
        id: 4,
        name: "Day Planner Application",
        img: projectDP,
        techStack:
          "HTML, CSS, Javascript, Google Fonts, Awesome Fonts, JQuery, MomentJS API, local storage",
        gitHubURL: "https://github.com/damiandeleon/work-day-scheduler",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://damiandeleon.github.io/work-day-scheduler/",
        deployTitle: "Deployed Project",
        description:
          "This app is used to plan daily activities.  100% front end using local storage to save information until it is manually deleted.  Using Javascript, the app wil shade events based on it's chronological relationship to the current time.",
      },
      {
        id: 5,
        name: "Password Generator Application",
        img: projectPG,
        techStack: "HTML, CSS, Javascript",
        gitHubURL: "https://github.com/damiandeleon/Password-Generator",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://damiandeleon.github.io/Password-Generator/",
        deployTitle: "Deployed Project",
        description:
          "One of my first assignments in coding bootcamp to practice Javascript.  The password generator creates a random password for a user based on the preferences taken from the user.",
      },
      {
        id: 6,
        name: "Weather Dashboard",
        img: projectWD,
        techStack: "HTML, CSS, Javascript, local storage, Open Weather API",
        gitHubURL: "https://github.com/damiandeleon/Weather-Dashboard/",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://damiandeleon.github.io/Weather-Dashboard/",
        deployTitle: "Deployed Project",
        description:
          "This tool is used to pull the local forecast plus a five-day forecast by city for a user. It derives the data from the Open Weather API site. All searches are saved to the web browser's local storage, and if not cleared, then can be accessed again when the page is revisited.",
      },
    ];
    return (
        <Project details={projectDetails} />    
    )

};


export default ProjectList;