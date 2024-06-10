// src\data\aboutData.js
import { iconName } from "@fortawesome/free-brands-svg-icons/fa42Group";
import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
  FaSchool,
  FaUniversity,
  FaInstagram,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiMongodb,
  SiPytorch,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiJupyter,
  SiScikitlearn,
  SiC,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

const aboutTopics = [
  {
    title: "Introduction",
    description:
      "I'm Wut, second year Computer Engineering student at KMUTT. <br> I have a keen interest in Machine Learning and a drive to create innovative solutions to real-world problems.",
    icons: [FaInstagram],
    links: ["https://www.instagram.com/uwutp"],
  },
  {
    title: "Education",
    description:
      "I am currently pursuing my Bachelor's degree in Computer Engineering at KMUTT, <br> where I am developing a strong foundation in software development, hardware systems, and computer science principles.",
    icons: [FaSchool, FaUniversity],
    links: ["https://www.bcc.ac.th/2019/", "https://www.kmutt.ac.th"],
  },
  {
    title: "Skills and Interests",
    description: [
      {
        category: "Programming Languages",
        icons: [FaPython, FaJs, FaHtml5, FaCss3Alt, SiC, SiCplusplus],
        iconName: ["Python", "JavaScript", "HTML", "CSS", "C", "C++"],
      },
      {
        category: "Web Development",
        icons: [FaReact, FaNodeJs],
        iconName: ["React", "Node.js"],
      },
      {
        category: "Database Management",
        icons: [SiMysql, SiMongodb],
        iconName: ["MySQL", "MongoDB"],
      },
      {
        category: "Tools and Frameworks",
        icons: [FaGitAlt, FaGithub, SiJupyter],
        iconName: ["Git", "GitHub", "Jupyter"],
      },
      {
        category: "Machine Learning Libraries and Knowledge",
        icons: [SiTensorflow, SiPytorch, SiOpencv],
        iconName: ["Tensorflow", "Pytorch", "OpenCV"],
      },
      {
        category: "Data Analysis",
        icons: [SiPandas, SiNumpy, SiPlotly, SiScikitlearn],
        iconName: ["Pandas", "Numpy", "Plotly", "Scikit-learn"],
      },
    ],
    icons: [FaGithub, FaLinkedin, FaKaggle],
    links: [
      "https://github.com/wutpppppppppppppppppp",
      "https://www.linkedin.com/in/panyawut",
      "https://www.kaggle.com/wooshwooshh",
    ],
  },
];

export default aboutTopics;
