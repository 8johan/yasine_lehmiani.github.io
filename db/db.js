export const bio = [
  "I am Yasine Lehmiani, a PhD student at LIMIARF in UM5. My research area of interest focuses on the application of deep learning in medical imaging. I am passionate about leveraging advanced computer vision techniques to improve the field of medical diagnostics and image analysis",
];

export const skills = [
  {
    title: "Languages",
    skillName: "python, C,java",
    color: "1",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "pytorch, numpy, pandas",
    color: "6",
    percentage: "70",
  },
  {
    title: "Design",
    skillName: "HTML, Bootstrap, ",
    color: "4",
    percentage: "30",
  },
  {
    title: "Version Control",
    skillName: "GitHub",
    color: "7",
    percentage: "50",
  },
  
  
  {
    title: "Editor",
    skillName: "VS Code",
    color: "6",
    percentage: "50",
  },
];

export const projects = {
  disclaimer:
    "*** ",
  webProjects: [
    {
      projectName: "Retinal Vessel segmentation",
     
      summary:
        "We build a segmentation model for retinal vessels using U-Net ,Attention Gate U-Net and Spatial attention U-net.",
      preview: "https://github.com/8johan/retinalseg",
      techStack: ["python", "pytorch"],
    },
    {
      projectName: "Twitter US Airline Sentiment classification",
      image: "images/findyourbank.png",
      summary:
        "compare SVM and LSTM for Twitter US Airline Sentiment classification in order to build the best classification model ..",
      preview: "https://github.com/8johan/deep-learning/blob/main/sentiment_classification1.ipynb",
      techStack: ["Machine learning", "Deep learning", "keras", "sklearn"],
    },
    {
      projectName: "pytorch implementation of U-Net and its variant",
      image: "images/portfolio.png",
      summary:
        "implement U-NET ,Attention u-net ,Spatial attention U-Net,U-net++ and Residual U-NET using pytorch.",
      preview: "https://github.com/8johan/deep-learning/blob/main/U_net_models.ipynb",
      techStack: ["pytorch", "python"],
    },
    
  ],
  softwareProjects: [
    {
      projectName: "Testosterone Deficiency classification",
      image: "images/pizzaorderchatbot.png",
      summary:
        "build a Testosterone Deficiency classification model using Randomforest.",
      preview: "https://github.com/8johan/ML-PROJECT/tree/main",
      techStack: ["python", "sklearn"],
    },
    
  ],
  androidProjects: [
    
  ],
  freelanceProjects: [
    
  ],
};

export const experience = [
  {
    title: "We are working on a conferance paper.",
    duration: "/",
    subtitle: "",
    details: [
      "."
    ],
    tags: [],
    icon: "heartbeat",
  },
  
];

export const education = [
  {
    title: "PhD Student in Computer Vision applied in medical images analysis at LIMIARF ",
    duration: "2023-PRESENT",
    subtitle: "Faculty of sciences in rabat.UM5",
    details: [
      ".",
    ],
    tags: [
      
    ],
    icon: "graduation-cap",
  },
  {
    title: "Master in BioInformatic ",
    duration: "",
    subtitle: "ENSIAS, Rabat",
    details: [
      ".",
    ],
    tags: [],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
     
      {
        text: "GitHub",
        link: "https://github.com/yasinelehmiani",
      },
      
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
      {
        text: "Clone this page",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/vinaysomawat/",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/thesigmakid",
      },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

const gitUserName = "vinaysomawat";
const mediumUserName = "vinaysomawat";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
