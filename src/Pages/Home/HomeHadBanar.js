import React from 'react';
import Particle from '../../components/particleJS/Particle';
// import ParticlesComponent from '../../components/particleJS/Particle';
import penimg from '../../Assets/pen-pic.png';
const HomeHadBanar = () => {
    return (
        <div className='flex lg:justify-around items-center lg:flex-row'>
          {/* import particle js */}
          <Particle />
           <div className="hero min-h-screen justify-start px-10 mt-14 lg:mt-0">
            <div className="hero-content">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold text-white" style={{fontSize:'2.8rem'}}>Create your blog and share your passion</h1>
                <p className="py-6 text-gray-300">More bloggers and independent creators choose Freemium than any other blogging tool. Tap into intuitive, flexible tools that put writers, bloggers, and creators first..</p>
                <button className="btn btn-primary bg-black hover:rotate-6"> Start bloging</button>
              </div>
  </div>
</div>
<div>
  <img className='hidden lg:block' src={penimg} alt="" />
</div>
        </div>
    );
};

export default HomeHadBanar;