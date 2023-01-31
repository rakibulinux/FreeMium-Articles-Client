import React from 'react';
import { Link } from 'react-router-dom';
import WhoToFollow from '../../sideCategory/WhoToFollow';
import Tabs from '../Tabs/Tabs';

const RefineRecommendations = () => {
       const tabsData = [
        { id: 1, label: 'Following', content: <div>Content for Tab 1</div> },
        { id: 2, label: ' Reading history', content: <div>Content for Tab 2</div> },
        { id: 3, label: ' Muted', content: <div>Content for Tab 2</div> },
        { id: 4, label: ' Suggestions', content: <div>Content for Tab 2</div> },
        { id: 5, label: ' Security and apps', content: <div>Content for Tab 2</div> },
        
    ];
    return (
        <div className='container mx-auto'>
            <div className='flex row'>
                <div className=' basis-3/4 mb-10'>
                    <div className='leading-loose'>
                        <h1 className='text-5xl font-bold'>Refine recommendations</h1>
                        <p className='mt-5'>Adjust recommendations by updating what you’re following, your reading history, and who you’ve muted.</p>

                    </div>
                    
                    
                    {/* tabs */}
                    <Tabs tabsData={tabsData} />
                    
{/* tabs */}
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