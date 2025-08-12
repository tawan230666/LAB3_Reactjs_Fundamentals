// src/data/portfolioData.js
import my_projeact_1 from "../assets/images/projeact/projeact1.png"
import my_projeact_2 from "../assets/images/projeact/projeact2.png"

export const projects = [
  {
    id: 1,
    title: "My Website",
    description: "Website to introduce yourself",
    image: my_projeact_1, // path รูปภาพโปรเจกต์
    technologies: ["html", "css", "javascript"],
    demoUrl: "https://tawan230666.github.io/portfolio-website/",
    githubUrl: "https://github.com/tawan230666/portfolio-website",
  },
  {
    id: 2,
    title: "Weather App",
    description: "You can see the weather.",
    image: my_projeact_2,
    technologies: ["html", "css", "javascript"],
    demoUrl: "https://tawan230666.github.io/my-weather-app/",
    githubUrl: "https://github.com/tawan230666/my-weather-app",
  },
  // โปรเจกต์อื่นๆ
];