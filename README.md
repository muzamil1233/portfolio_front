//installed dependencies
1) npm install @sanity/client @sanity/image-url (peding)
2) npm install framer-motion
3)npm install sass or node-sass
4)-    -     react-iconsclear


//inside container their is file named container.js : inside this iam exporting all the files and using them inside app.js
 other wise i would have to impor all these files one by one their and now i can import them in App.js like this:
import {Navbar,Header,About,Footer,Skills, Testimonial,Work} from "./container/container"


//inside constants folder inside it is a images.js file and inside all images from assets folder are imported and then whenever
we need to use an images we simply use images.js file and use images like this images.logo and another files is inside it
index.js where we export all these images

//class names with double underscore in them are predefined inside App.scss 