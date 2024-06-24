import {
  facebook,
  linkedin,
  instagram,
  twitter,
  github,
  facebook1,
  linkedin1,
  instagram1,
  twitter1,
  github1,
  tvshowbox,
  guesstheword,
  tictactoe,
  mathmagician,
  metricwebapp,
  spacetravelers,
  recipeapp,
  trackbudget,
  carrental,
  guesstheword1,
  guesstheword2,
  guesstheword3,
  spacetravelers1,
  spacetravelers2,
  spacetravelers3,
  tictactoe1,
  tictactoe2,
  tictactoe3,
  tvshow1,
  tvshow2,
  tvshow3,
  metricswebapp1,
  metricswebapp2,
  recipeapp3,
  recipeapp4,
  recipeapp6,
  trackbuget1,
  trackbuget2,
  trackbuget5,
  carrental1,
  carrental2,
  carrental3,
  responsive,
  react,
  fullstack,
} from "../assets";

const social = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gladwin-k/",
    icon: linkedin,
    icon1: linkedin1,
  },
  // {
  //   id: 2,
  //   name: "Facebook",
  //   url: "https://www.facebook.com/",
  //   icon: facebook,
  //   icon1: facebook1,
  // },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/mass_v2.0?igsh=MWhvaDJoazU3bThxYg==",
    icon: instagram,
    icon1: instagram1,
  },
  // {
  //   id: 4,
  //   name: "Twitter",
  //   url: "https://twitter.com/Rhaegar121",
  //   icon: twitter,
  //   icon1: twitter1,
  // },
  {
    id: 5,
    name: "Github",
    url: "https://github.com/GladwinM",
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ["languages", "all"],
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },

  {
    stack: ["languages", "all"],
    name: "Python",
    icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    stack: ["frameworks", "all"],
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Express",
    icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    stack: ["tools", "all"],
    name: "MongoDb",
    icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Node JS",
    icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },
  {
    stack: ["tools", "all"],
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  
  {
    stack: ["tools", "all"],
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

const projects = [
  {
    id: 1,
    name: "TV Shows Box",
    desc: "TVshows Box is a web application showing multiple TV shows with the help of TVmaze API which contains both mobile and desktop versions. The webapp have 3 interfaces: - A home page, a popup window, and a contact page.",
    tech: ["HTML5", "CSS3", "JavaScript", "TVmaze API"],
    img: tvshowbox,
    carousel: [tvshow1, tvshow2, tvshow3],
    source_link: "https://github.com/GladwinM",
    live_link: "https://tvshowbox.netlify.app/",
  },
  {
    id: 2,
    name: "Metrics Webapp",
    desc: "Metrics Webapp is a mobile web application showing the current weather data of the cities using the Openweather API. It has two interfaces - city page and detail page based on the design of Nelson Sakwa on Behance. Built during the Microverse Module 3 React Captone Project.",
    tech: ["React", "JavaScript", "Openweather API"],
    img: metricwebapp,
    carousel: [metricswebapp1, metricswebapp2],
    source_link: "https://github.com/GladwinM",
    live_link: "https://metrics-webapp121.netlify.app/",
  },
  {
    id: 3,
    name: "Track Budget App",
    desc: "Track Budget is a mobile web application where you can manage your budget: you have a list of purchases associated with a category, so that you can see how much money you spent and on what category.",
    tech: ["Ruby", "Ruby on Rails", "PostgreSQL"],
    img: trackbudget,
    carousel: [trackbuget1, trackbuget2, trackbuget5],
    source_link: "https://github.com/GladwinM",
    live_link: "https://track-budget121-70a570d4e3e1.herokuapp.com/",
  },
  {
    id: 4,
    name: "Math Magicians",
    desc: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
    tech: ["React"],
    img: mathmagician,
    carousel: [mathmagician],
    source_link: "https://github.com/GladwinM",
    live_link: "https://math-magicians121.netlify.app/",
  },
  {
    id: 5,
    name: "Tic Tac Toe",
    desc: "Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: tictactoe,
    carousel: [tictactoe1, tictactoe2, tictactoe3],
    source_link: "https://github.com/GladwinM/Tic-Tac-Toe",
    live_link: "https://tiny-croquembouche-f67250.netlify.app/",
  },
  {
    id: 6,
    name: "Space Travelers' Hub",
    desc: "Space Travelers' Hub is a web application that provides commercial and scientific space travel services using the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions.",
    tech: ["React", "SpaceX API"],
    img: spacetravelers,
    carousel: [spacetravelers1, spacetravelers2, spacetravelers3],
    source_link: "https://github.com/GladwinM",
    live_link: "https://space-travelers-hub121.netlify.app/",
  },
  {
    id: 7,
    name: "Guess the word",
    desc: "Guess The Word is a fun letter puzzle game where the player have to guess the hidden word using the clues that the game gives. The game ends if the player guesses the correct word or if he chooses the wrong letter 8 times. Mainly built with Javascript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: guesstheword,
    carousel: [guesstheword1, guesstheword2, guesstheword3],
    source_link: "https://github.com/GladwinM",
    live_link: "https://guess-the-word121.netlify.app/",
  },
];

const testimonials = [
  
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: "Responsive Design",
    text: "I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.",
  },
  {
    id: 2,
    icon: react,
    title: "Front-end Development",
    text: "I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.",
  },
  {
    id: 3,
    icon: fullstack,
    title: "Back-end Development",
    text: "My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.",
  },
];

const navLinks = [
  {
    id: 1,
    name: "About",
    url: "/#about",
  },
  {
    id: 2,
    name: "Service",
    url: "/#service",
  },
  {
    id: 3,
    name: "Work",
    url: "/#work",
  },

  {
    id: 4,
    name: "Contact",
    url: "/#contact",
  },
];
//done
export { technologies, projects, testimonials, social, services, navLinks };
