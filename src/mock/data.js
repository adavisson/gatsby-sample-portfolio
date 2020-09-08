import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Andrew',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Full Stack Engineer with 5 years of experience as a Systems Administrator in various industries. I have a passion for learning new technologies and staying up to date with the latest trends in Software Development. I have experience working on highly collaborative teams, and I value effective communication. I welcome unique and challenging problems, and I enjoy finding ways to automate tasks and processes.',
  paragraphTwo: 'I am currently working on projects that are built with a variety of technologies and frameworks, including: ReactJS, NodeJS, GraphQL, Apollo, Vue, and React-Native. Check out my Resume and Projects page to learn more about me and what I am working on.',
  paragraphThree: 'A little more about me, I grew up in South Carolina and went to Clemson University (Go Tigers!). After graduating with a degree in Computer Information Systems, I landed a job in Charleston, SC and lived there for several years. While I really enjoyed living there, I decided that I would like to live somewhere with more than zero mountains. So, I made the move to Denver in the Summer of 2017 and I am thoroughly enjoying it. My hobbies include golf, snowboarding, hiking, weightlifting, and more recently I have been trying to get into photography.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
