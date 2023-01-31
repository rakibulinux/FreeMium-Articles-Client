import React from 'react';
import { Link } from 'react-router-dom';
import StaffPicks from '../../sideCategory/StaffPicks';
import Tabs from '../Tabs/Tabs';

const Stories = () => {
       const tabsData = [
        { id: 1, label: 'Drafts', content: <div>Drafts</div> },
        { id: 2, label: ' Published', content: <div>Published</div> },
        { id: 3, label: ' Responses', content: <div>Responses</div> },
        
    ];
    return (
        <div className='container mx-auto'>
            <div className='flex row'>
                <div className=' basis-3/4 mb-10'>
                    <div className='flex justify-between'>
                        <h1 className='text-4xl font-bold'>Your stories</h1>
                        <div>
                            <Link className="btn btn-success bg-green-600 rounded-full  border-none text-white" to="/write-stories">Write a story</Link>
                            <button className="btn btn-outline rounded-full ml-3">Import a story</button>
                       </div>
                    </div>
            
                    {/* tabs */}
                    <Tabs tabsData={tabsData} />
                    
{/* tabs */}
                </div>
                <div className="divider divider-horizontal"></div>
                <aside className="basis-1/4 px-8 hidden md:block lg:block">
                    <button className="bg-black text-white rounded-3xl py-3 w-10/12">
                        Get unlimited access
                    </button>
                    <StaffPicks></StaffPicks>

                </aside>
            </div>
        </div>
    );
};

export default Stories;