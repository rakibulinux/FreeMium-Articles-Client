import React from 'react';
import { bounce, rotateIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const OurStory = () => {
    const styles = {
        rotateIn: {
            animation: 'y 5s',
            animationName: Radium.keyframes(rotateIn, 'rotateIn')
        }
    }
    return (
        <div>
            <h1 className=' text-center sm:text-4xl md:text-5xl lg:text-8xl my-32 font-semibold font-sans'>Every idea needs a <span className='font-bold'>Medium.</span></h1>
            <div className='grid grid-cols-2'>
                <div className='border '>
                    <p className='m-14 font-semibold'>
                        The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.

                        We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
                    </p>
                </div>
                <StyleRoot className='border'>
                    <div style={styles.rotateIn}>
                        <img className='m-14 w-5/6' src="https://curator-prod-site-s3.b-cdn.net/curator-site/hero-laptop_tgwxkf_odflzv.webp" alt="" />
                    </div>
                </StyleRoot>

            </div>
            <div className='bg-[#ffd1b9]'>
                <h1 className='text-center font-medium  lg:text-7xl text-5xl mx-5 md:mx-32 lg:mx-48 mb-5'>
                    A living network of <br /> curious minds.
                </h1>
                <p className='mx-16 md:mx-36 lg:mx-96 font-semibold'>Anyone can write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You’ll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.</p>
            </div>
        </div>
    );
};

export default OurStory;