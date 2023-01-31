import React from "react";
import { Link } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import SecurityAndApps from "./SecurityAndApps";

const Settings = () => {
   const tabsData = [
        { id: 1, label: 'Account', content: <div>Account</div> },
        { id: 2, label: ' Publishing', content: <div>Publishing</div> },
        { id: 3, label: ' Notifications', content: <div>Notifications</div> },
        { id: 4, label: ' Membership and payment', content: <div>Membership and payment</div> },
        { id: 5, label: ' Security and apps', content: <div><SecurityAndApps></SecurityAndApps></div> },
        
    ];
  return (
    <div className='container mx-auto'>
      <div className='flex row'>
        <div className=' basis-3/4 mb-10'>
          <div className='flex justify-between'>
            <h1 className='text-5xl font-bold'>Settings</h1>
          
          </div>
          {/* tabs */}
                    <Tabs tabsData={tabsData} />
                    
{/* tabs */}
        </div>
        <div className="divider divider-horizontal"></div>
        <aside className="basis-1/4 px-8 leading-loose hidden md:block lg:block">
          <h1 className=" text-lg font-semibold">Suggested help articles</h1>
          <Link to="">Sign in or Sign up to FreeMium</Link>
          <Link to="">Your profile page</Link>
          <Link to="">Writing and Publishing your first story</Link>
          <Link to="">About FreeMium's distribution system</Link>
          <Link to="">Get started with the Partner Programs</Link>

        </aside>
      </div>
    </div>
  );
};

export default Settings;
