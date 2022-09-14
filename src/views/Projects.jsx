import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const projects = [
  {
    link: "https://bingemovies.netlify.app/",
    img: "https://i.postimg.cc/TPYBYpZY/Screenshot-52.png",
    desc: "Interactive and responsive PWA API integration, SEO optimized Tech Stack: React.js, TMDb, MUI, Netlify ",
    source: "https://github.com/veeresh-27/auth",
  },

  {
    link: "https://linkedin-clone-6ce1f.web.app/",
    img: "https://i.postimg.cc/rsYJ8pX3/Screenshot-46.png",
    title: "LinkedIn Clone",
    desc: "Website created to authenticate users. A user can create a post and read the posts created by other users which lookslike linkedIn. React.js, Firebase, MUI.",
    source: "https://github.com/veeresh-27/linkedin-clone",
  },
  {
    img: "https://i.postimg.cc/bY6L0mDg/Screenshot-47.png",
    title: "Shmart",
    desc: "Interactive and responsive E-commerce Web App.Google authentication, API intgreation.React.js, Firebase",
    link: "https://shmart-369a9.web.app/",
    source: "https://github.com/veeresh-27/shmart",
  },
  {
    img: "https://i.postimg.cc/yYkjL00H/Screenshot-48.png",
    title: "CarPrice Predictor",
    desc: "A web application that predicts the resale price of a car based on the features of the car",
    link: "https://veer-ml-lr.herokuapp.com/",
    source: "https://github.com/veeresh-27/ml_lr",
  },
  {
    img: "https://i.postimg.cc/50ggR3Px/Screenshot-41.png",
    title: "B-Link",
    link: "https://benz-hackathon.vercel.app/",
    desc: "NextJS project created for a benz-hackathon on HakerEarth website.",
    source: "",
  },

  {
    img: "https://i.postimg.cc/fTpKpkv0/Screenshot-49.png",
    title: "Portfolio",
    source: "https://github.com/veeresh-27/my-portfolio",
    desc: "Interactive and responsive Web App Dark mode toggle.React.js, Tailwind CSS, Netlify, Framer Motions",
    link: "https://veeresh-portfolio.netlify.app/",
  },
  {
    img: "https://i.postimg.cc/hGq04w6D/Screenshot-50.png",
    title: "Yoga Studio",
    source: "https://github.com/veeresh-27/yogo-studio",
    desc: "A website built with react, deployed and hosted on firebase with functional cta",
    link: "https://yoga-studio-820c8.web.app/",
  },
  {
    img: "https://i.postimg.cc/pLjZHx0c/Screenshot-51.png",
    title: "FlyHigh",
    source: "https://github.com/veeresh-27/LetsGrowMore-task1",
    desc: "A travel website built to complete the task in LetsGrowMore VIP and is hosted by github pages",
    link: "https://veeresh-27.github.io/LetsGrowMore-task1/",
  },
];

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="projects" className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">My Projects</h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">What I Built</h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projects.map(({ img, title, desc, link, source }, index) => (
            <Card key={index} img={img} title={title} desc={desc} link={link} source={source} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
