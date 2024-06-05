// src\data\aboutData.js
import { FaGithub, FaLinkedin, FaKaggle, FaSchool, FaInstagram} from 'react-icons/fa';

const aboutTopics = [
  {
    title: "Introduction",
    description: "I'm Wut, second year Computer Engineering student at KMUTT. \n I have a keen interest in Machine Learning and a drive to create innovative solutions to real-world problems.",
    icons: [FaInstagram],
    links: [
    "https://www.instagram.com/uwutp",
    ]
  },
  {
    title: "Education",
    description: "I am currently pursuing my Bachelor's degree in Computer Engineering at KMUTT, \n where I am developing a strong foundation in software development, hardware systems, and computer science principles.",
    icons: [FaSchool],
    links: [
      "https://www.kmutt.ac.th",
    ]
  },
  {
    title: "Skills and Interests",
    description: `
      - Programming Languages: Python, C/C++, Assembly
      - Web Development: HTML, CSS, JavaScript
      - Database Management: SQL, MongoDB, PyMongo
      - Tools and Frameworks: Git, React.js, Node.js, Tailwind CSS
      - Machine Learning Libraries and Knowledge: TensorFlow, MMPose, OpenCV, Stable-baseline
      - Data Analysis: Pandas, NumPy, BeautifulSoup, Plotly, Matplotlib, Sklearn` ,
    icons: [FaGithub, FaLinkedin, FaKaggle],
    links: [
      "https://github.com/wutpppppppppppppppppp",
      "https://www.linkedin.com/in/panyawut",
      "https://www.kaggle.com/wooshwooshh"
    ]
  }
];

export default aboutTopics;