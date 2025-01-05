//website images

import gym from "../assets/WorkImages/website/gym.jpg";
import wc from "../assets/WorkImages/website/wecode.png";
import crypto from "../assets/WorkImages/website/crypto.png";
import videohub from "../assets/WorkImages/website/videohub.jpeg"

//icons
import { BsCodeSquare } from "react-icons/bs";
import { MdOutlineSocialDistance } from "react-icons/md";

const projectsdata = [
  {
    tag: "All",
    title: "CryptoPedia",
    description:
      "With CryptoPedia, you can easily access the latest market data.",
    url: "https://cryptoapp-alpha-pink.vercel.app/",
    code: "",
    image: crypto,
    category: "Website",
  },
  {
    tag: "All",
    title: "ClipNest",
    description:
      "ClipNest is a feature-rich video streaming app designed for easy access to your favorite movies, shows, and content creators",
    url: "https://videohub-eta.vercel.app/",
    code: "",
    image: videohub,
    category: "Website",
  },
  {
    tag: "All",
    title: "GymSync",
    description:
      "sync your gym workouts and fitness progress in one app. GymSync offers smart workout tracking, goal-setting, and personalized fitness coaching.",
    url: "https://fit-club-lac.vercel.app/",
    code: "",
    image: gym,
    category: "Website",
  },
  {
    tag: "All",
    title: "WeCode Institute",
    description:
      "Front End website design for coding institutes.",
    url: "https://master--ipec-muz.netlify.app/",
    code: "",
    image: wc,
    category: "Website",
  },
];

const moreprojects=[
  {
    icon:<BsCodeSquare/>,
    name:"WeCode",
    link:"",
  },
  {
    name:"Connect",
    link:"",
  },
  {
    name:"Weather-App",
    link:"",
  },
  {
    name:"EventHub",
    link:"",
  },
  {
    name:"BrandSolutions",
    link:"",
  },

]
export default projectsdata;
export {moreprojects}
