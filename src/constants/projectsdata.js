//website images

import cw from "../assets/WorkImages/website/carWeb.png";
import wc from "../assets/WorkImages/website/weCode.png";
import crypto from "../assets/WorkImages/website/crypto.png";
import hadithApp from "../assets/WorkImages/website/hadithApp.png"

//icons
import { BsCodeSquare } from "react-icons/bs";
import { MdOutlineSocialDistance } from "react-icons/md";

const projectsdata = [
  {
    tag: "All",
    title: "CryptoPedia",
    description:
      "With CryptoPedia, you can easily access the latest market data.",
    url: "https://cryptopedia.netlify.app/",
    code: "",
    image: crypto,
    category: "Website",
  },
  {
    tag: "All",
    title: "Hadees App",
    description:
      "Get Hadith from books like bukhari shareef, muslim shareef and more.",
    url: "https://hadeesapp.vercel.app/",
    code: "",
    image: hadithApp,
    category: "Website",
  },
  {
    tag: "All",
    title: "CarWeb",
    description:
      "Website design for car modification company.",
    url: "https://carwebshop.netlify.app/#",
    code: "",
    image: cw,
    category: "Website",
  },
  {
    tag: "All",
    title: "WeCode Institute",
    description:
      "Front End website design for coding institutes.",
    url: "https://wecodeinstitute.netlify.app/",
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
