import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";
import { Helmet } from "react-helmet";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <Helmet>
        <title>Veeresh Portfolio</title>
        <meta name="description" content="Veeresh Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Veeresh Portfolio , Veeresh , Veeresh R M , VeereshRM , veereshrm , veeresh r m, developer , web developer , veeresh developer , veereshrm developer , veeresh r m developer , veeresh web developer , veereshrm web developer ,  veeresh r m web developer"
        />
      </Helmet>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }>
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span className={darkMode ? "block text-black" : " text-white"}>
                Hi, I am Veeresh
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
                <Typical
                  steps={["Front End Developer", "Full Stack Developer", "Freelancer   "]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }>
              I'm 4th year B.Tech student, Front-End / Full-Stack Developer. Currently working at
              Omikron Technologies as a Web Developer intern. Looking for opportunities to grow and
              learn.
            </p>
            <div className="flex md:justify-start gap-2 ">
              {contactLinks.map((el) => (
                <div className="w-10">
                  <a
                    href={el.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mr-5 cursor-pointer  mt-8 hover:scale-125">
                    <img alt="" src={el.url} className="flex w-full" />
                  </a>
                </div>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/1KcI10EsQhPtieL0Q67B70WAuNkohhnYS/view"
              target="_blank"
              rel="noreferrer">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                  <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 click:bg-blue-200 md:py-4 md:text-lg md:px-10">
                    Resume
                  </div>
                </div>
              </div>
            </a>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
