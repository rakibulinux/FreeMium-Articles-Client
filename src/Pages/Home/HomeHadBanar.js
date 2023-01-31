import React from "react";
// import ParticlesComponent from '../../components/particleJS/Particle';
import penimg from "../../Assets/pen-pic.png";
// import { useLottie } from "lottie-react";
// import journalist from "../../Lottie/Journalist.json";
const HomeHadBanar = () => {
  // const options = {
  //   animationData: journalist,
  //   loop: true
  // };
  // const { View } = useLottie(options);
  return (
    <div className="flex lg:justify-around items-center lg:flex-row">
      {/* import particle js */}
      <div className="hero min-h-screen justify-start px-10 lg:mt-14 mt-0">
        <div className="hero-content">
          <div className="lg:max-w-md max-w-prose">
            <h1 className="lg:text-5xl text-3xl font-bold text-gray-900 uppercase lg:leading-tight leading-snug">
              Create your blog and share your passion
            </h1>
            <p className="lg:py-6 py-4 text-gray-600">
              More bloggers and independent creators choose Freemium than any
              other blogging tool. Tap into intuitive, flexible tools that put
              writers, bloggers, and creators first..
            </p>
            <button className="btn btn-primary bg-black">Start bloging</button>
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
