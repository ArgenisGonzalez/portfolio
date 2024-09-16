// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Argenis",
  middleName: "José",
  lastName: "González",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/argenisgonzalez",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/argenis-jos%C3%A9-gonz%C3%A1lez-garc%C3%ADa-b28b9618b/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/argenisGonzalez.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/argenis.jpeg"),
  imageSize: 355,
  message:
    "My name is Argenis González. 👨‍💻 I´m a JavaScript Developer specializing in backend development, I am a Computer Systems Engineer with strong expertise in database design (SQL/NoSQL) and API development. 🌐 I thrive in multidisciplinary teams, implementing innovative solutions that boost performance and enhance user experience. 🚀 My commitment to technical excellence is evident through successful projects and continuous professional growth. 📈",
  resume:
    "https://drive.google.com/file/d/1wZas0IcMExLoH-ySefy1jdbqzvG7FzEN/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "argenisGonzalez", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/argenis.jpeg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/argenis.jpeg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 60 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 55 },
    { name: "Node.Js", value: 75 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 45 },
    { name: "HTML/CSS", value: 75 },
    { name: "NoSQL", value: 50 },
  ],
  softSkills: [
    { name: "Accountability", value: 100 },
    { name: "Collaboration", value: 90 },
    { name: "Communication", value: 100 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 80 },
    { name: "Commitment", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "arggon18@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "JavaScript Developer Intern",
      companylogo: require("../assets/img/ks-university.png"),
      date: "Sept2022 – Jan 2023",
    },
    {
      role: "Backend Developer",
      companylogo: require("../assets/img/TKSG-logo-200.png"),
      date: "Jan 2022 – Present",
    },
    {
      role: "Backend Developer Consultant at Glasshive",
      companylogo: require("../assets/img/glasshive.webp"),
      date: "Jun 2023 – Present",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
