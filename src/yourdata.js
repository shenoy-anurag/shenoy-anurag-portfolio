// Skills Icons
// import htmlIcon from "./images/html.svg"
// import cssIcon from "./images/css.svg"
// import jsIcon from "./images/javascript.svg"
// import designIcon from "./images/design.svg"
// import codeIcon from "./images/code.svg"
import reactIcon from "./images/react.svg"
import pythonIcon from "./images/python.svg"
import tensorflowIcon from "./images/tensorflow.svg"
import golangIcon from "./images/golang-gopher.svg"
import dockerIcon from "./images/docker.svg"
import numpyIcon from "./images/numpylogo2.svg"
import pandasIcon from "./images/pandas2.svg"
import nlpIcon from "./images/NLP.png"
import mongodbIcon from "./images/mongodb.svg"
import sqlIcon from "./images/sql.png"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedInIcon from "./images/linkedin.svg"
import twitterIcon from "./images/twitter.svg"
import kaggleIcon from "./images/kaggle.svg"

const BEGINNER = "beginner"
const INTERMEDIATE = "intermediate"
const ADVANCED = "advanced"
const EXPERT = "expert"

export default {
  //   Header Details ---------------------
  name: "Anurag",
  headerTagline: "Building digital products, and obtaining insights from data using deep learning",
  headerTaglines: [
    //Line 1 For Header
    "Building digital products, ",
    //Line 2 For Header
    "and obtaining insights from data ",
    //Line 3 For Header
    "using deep learning",
  ],
  //   Header Paragraph
  headerParagraph:
    "Computer Science Student at University of Florida with 3 years of professional experience in building deep learning models and web applications.",

  //Contact Email
  contactEmail: "anuragshenoy21@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Aggre-Gator",
      para:
        "Hackathon Winning Project! A News aggregator service which scrapes news networks for articles, and provides user with a feed. Built using Python, Flask, Celery, MongoDB, RabbitMQ, and ElasticSearch and deployed on Amazon LightSail.",
      imageSrc:
        "https://i.imgur.com/Sls8KNp.png",
      url: "https://github.com/shenoy-anurag/Aggre-Gator",
    },
    {
      title: "Simple Reddit",
      para:
        "Reddit clone using Golang, Angular & MongoDB. We have used Software Engineering best practices and Agile methodologies.",
      imageSrc:
        "https://i.imgur.com/ITitoe2.png",
      url: "https://shenoy-anurag.github.io/blog/simple-reddit",
    },
    {
      title: "Data Science Chatbot",
      para:
        "A chatbot named Gyan who can teach you concepts of machine learning and data science.",
      imageSrc:
        "https://i.imgur.com/lJwrF4O.png",
      url: "https://shenoy-anurag.github.io/",
    },
    {
      title: "Hand Gesture Recognition",
      para:
        "A Hand Gesture Recognition App being built for Human Computer Interaction project. We are comparing hand gestures with tangible interaction to research usability, and naturalness of both interaction methods.", 
      imageSrc:
        "https://camo.githubusercontent.com/bed0323313b5052dd641f6090c49bdb2ab87cfdd2db8a0a02d07e54f8898c10f/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6b7746686e5159785854587463584963346d2f67697068792d646f776e73697a65642e676966",
      url: "https://github.com/shenoy-anurag/hand-gesture-recognition",
    },
    {
      title: "Baits", 
      para:
        "Probes/Baits extraction from DNA Sequences",
      imageSrc:
        "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      url: "https://shenoy-anurag.github.io/blog/bioinformatics-proj-proposal/",
    },

    /*
    ,{
        title: 'Project Seven',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am currently pursuing my masters in Computer Science at the University of Florida in Gainesville, with a focus on Machine Learning.",
  aboutParaTwo:
    "I use Natural Language Processing and other Deep Learning technologies to enable computers to interact with the world around them. I’m intrigued by the human brain and its capacity to process information, categorise objects, recognize patterns and form intelligent thoughts seemingly effortlessly unlike machines (so far).",
  aboutParaThree:
    "When I’m not developing software or being lost in thought, I like to read books, play football (soccer), play the piano, listen to music, learn from podcasts or watch educational youtube content.",
  aboutImage:
    "https://i.imgur.com/0rnoUPB.png",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: pythonIcon,
      para: "3 years of professional experience. 5 years overall.",
      level: EXPERT,
    },
    {
      img: numpyIcon,
      para: "3 years of work experience wrangling and working with data.",
      level: ADVANCED,
    },
    {
      img: pandasIcon,
      para: "3 years of work experience wrangling and working with data.",
      level: ADVANCED,
    },
    {
      img: tensorflowIcon,
      para: "2.5 years of work experience designing deep learning models for NLP and CV.",
      level: ADVANCED,
    },
    {
      img: nlpIcon,
      para: "2.5 years of work experience designing NLP and NLU models.",
      level: ADVANCED,
    },
    {
      img: mongodbIcon,
      para: "3 years of work experience with MongoDB.",
      level: ADVANCED,
    },
    {
      img: sqlIcon,
      para: "6 months of work experience with PostgreSQL.",
      level: INTERMEDIATE,
    },
    {
      img: dockerIcon,
      para: "2 years of work experience working with containers.",
      level: INTERMEDIATE,
    },
    {
      img: golangIcon,
      para: "4 months of experience working on a class project.",
      level: INTERMEDIATE,
    },
    {
      img: reactIcon,
      para: "3 months of experience working on a class project.",
      level: BEGINNER,
    },
    // {
    //   img: htmlIcon,
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
    // {
    //   img: cssIcon,
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
    // {
    //   img: jsIcon,
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's build something great together",
  contactPhoneNumber: "+1 (352)-888-9648",

  // -------------- End Contact Section ---------------

  // -------------- Footer Section --------------
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon,
      url: "https://github.com/shenoy-anurag"
    },
    {
      img: linkedInIcon,
      url: "https://www.linkedin.com/in/anurag-shenoy/",
    },
    {
      img: kaggleIcon,
      url: "https://www.kaggle.com/anurags397",
    },
    {
      img: twitterIcon,
      url: "https://twitter.com/anurag397",
    },
  ],
  // -------------- End Footer Section ---------------
}
