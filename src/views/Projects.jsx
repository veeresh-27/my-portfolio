import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          My Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Card
            img="https://sandbox-uploads.imgix.net/u/1655576389-e7f100ba9ce0bfef585cca7eb509f91f?w=600"
            title="CarPrice Predictor"
            desc="A web application that predicts the resale price of a car based on the features of the car"
            link="https://veer-ml-lr.herokuapp.com/"
            source="https://github.com/veeresh-27/ml_lr"
          />
          <Card
            link="https://linkedin-clone-6ce1f.web.app/"
            img="https://sandbox-uploads.imgix.net/u/1655577682-9940d7288e9dde920f09f79058539d2e?w=600"
            title="LinkedIn Clone"
            desc="A clone of LinkedIn built with React and Firebase"
            source="https://github.com/veeresh-27/linkedin-clone"
          />
          <Card
            img="https://sandbox-uploads.imgix.net/u/1655577886-589805865d630ce7d4113dd4f42b8b22?w=600"
            title="Shmart"
            desc="A e-commerce website built with react, deployed and hosted on firebase with authentication"
            link="https://shmart-6ce1f.web.app/"
            source="https://github.com/veeresh-27/shmart"
          />
          <Card
            img="https://sandbox-uploads.imgix.net/u/1655578398-587523a340cbe2d5d99a4a947b1dc0f9?w=600"
            title="Yoga Studio"
            source="https://github.com/veeresh-27/yogo-studio"
            desc="A website built with react, deployed and hosted on firebase with functional cta"
            link="https://yoga-studio-820c8.web.app/"
          />
          <Card
            img="https://sandbox-uploads.imgix.net/u/1655578638-0d9110891cff26fdf8fe018592afa58b?w=600"
            title="Portfolio"
            source=""
            desc="A portfolio website built with react to show case all my works, deployed and hosted on Netlify"
            link="https://veer-portfolio.netlify.app/"
          />
          <Card
            img="https://sandbox-uploads.imgix.net/u/1655579069-95cf3aca4cb08ab272537eb6d9f25f44?w=600"
            title="FlyHigh"
            source="https://github.com/veeresh-27/LetsGrowMore-task1"
            desc="A travel website built to complete the task in LetsGrowMore VIP and is hosted by github pages"
            link="https://veeresh-27.github.io/LetsGrowMore-task1/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
