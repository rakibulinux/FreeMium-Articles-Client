import React from "react";
import { useContext } from "react";
// import ParticlesComponent from '../../components/particleJS/Particle';
import penimg from "../../Assets/pen-pic.png";
import { APIContext } from "../../contexts/APIProvider";
// import { useLottie } from "lottie-react";
// import journalist from "../../Lottie/Journalist.json";
const HomeHadBanar = () => {
  // const options = {
  //   animationData: journalist,
  //   loop: true
  // };
  // const { View } = useLottie(options);
  const { isDarkMode } = useContext(APIContext);
  return (
    <div className="flex lg:justify-around items-center lg:flex-row">
      {/* import particle js */}
      <div className="hero justify-start">
        <div className="hero-content">
          <div className="lg:max-w-md max-w-prose">
            <h1
              className={
                isDarkMode
                  ? "lg:text-5xl text-3xl font-bold text-gray-100 uppercase lg:leading-tight leading-snug"
                  : "lg:text-5xl text-3xl font-bold text-gray-900 uppercase lg:leading-tight leading-snug"
              }
            >
              Create your blog and share your passion
            </h1>
            <p
              className={
                isDarkMode
                  ? "lg:py-6 py-4 text-gray-200"
                  : "lg:py-6 py-4 text-gray-600"
              }
            >
              More bloggers and independent creators choose Freemium than any
              other blogging tool. Tap into intuitive, flexible tools that put
              writers, bloggers, and creators first..
            </p>
            <button
              className={
                isDarkMode
                  ? "text-white py-2 px-3 font-medium bg-black-250 hover:bg-black-250 border-0 rounded-full"
                  : "text-white py-2 px-3 font-medium bg-black-250 hover:bg-black-250 border-0 rounded-full"
              }
            >
              Start Bloging
            </button>
          </div>
        </div>
      </div>
      <div id="slideshow">
        <img className="hidden lg:block" src={penimg} alt="" />
      </div>
    </div>
  );
};

export default HomeHadBanar;
