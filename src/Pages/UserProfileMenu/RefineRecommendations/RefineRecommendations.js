import React from 'react';
import { Link } from 'react-router-dom';
import WhoToFollow from '../../sideCategory/WhoToFollow';

const RefineRecommendations = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex row'>
                <div className=' basis-3/4 mb-10'>
                    <div className='leading-loose'>
                        <h1 className='text-5xl font-bold'>Refine recommendations</h1>
                        <p className='mt-5'>Adjust recommendations by updating what you’re following, your reading history, and who you’ve muted.</p>

                    </div>
                    <div className="tabs mt-10">
                        <Link className="tab tab-bordered tab-active">Following</Link>
                        <Link className="tab tab-bordered ">Reading history</Link>
                        <Link className="tab tab-bordered ">Muted</Link>
                        <Link className="tab tab-bordered ">Suggestions</Link>
                        <Link className="tab tab-bordered ">Security and apps</Link>
                    </div>
                </div>
                <div className="divider divider-horizontal "></div>
                <aside className="basis-1/4 px-8 hidden md:block lg:block leading-loose">
                    <WhoToFollow></WhoToFollow>

                </aside>
            </div>
        </div>
    );
};

export default RefineRecommendations;