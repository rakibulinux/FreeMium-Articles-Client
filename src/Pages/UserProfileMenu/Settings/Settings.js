import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex row'>
        <div className=' basis-3/4 mb-10'>
          <div className='flex justify-between'>
            <h1 className='text-5xl font-bold'>Settings</h1>
          
          </div>
          <div className="tabs mt-10">
            <Link className="tab tab-bordered tab-active">Account</Link>
            <Link className="tab tab-bordered ">Publishing</Link>
            <Link className="tab tab-bordered ">Notifications</Link>
            <Link className="tab tab-bordered ">Membership and payment</Link>
            <Link className="tab tab-bordered ">Security and apps</Link>
          </div>
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
