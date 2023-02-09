import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { APIContext } from '../../../contexts/APIProvider';
import { AuthContext } from '../../../contexts/AuthProvider';

const EditArticle = () => {
    const {  isDarkMode } = useContext(APIContext)
    const { user } = useContext(AuthContext);
    const data = useLoaderData()
    const {articleTitle, articleDetails} = data 
    const title = articleTitle.replace(/<[^>]+>/g, "");
    const details = articleDetails.replace(/<[^>]+>/g, "");
   const handleArticleUpdate = (e) =>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const details = form.details.value;
console.log(title,details)
   }

    return (
        <form onSubmit={handleArticleUpdate} className='p-16'>
            <div className=' flex justify-between mb-5'>
                <h3 className='text-5xl font-bold'>{user?.displayName}</h3>
            <input type="submit"  className={
              isDarkMode
                ? "btn bg-green-500 hover:bg-green-700 text-white rounded-full"
                : "btn bg-green-600 rounded-full text-white"
            } value="Save and Publish" />
            </div>
            <div className="form-control">
  <label className="label">
    <span className="label-text text-2xl font-bold">Article Title </span>
  </label>
  <textarea name='title' className="textarea textarea-bordered text-center text-4xl h-max" defaultValue={title} placeholder="Bio"></textarea>
</div>
            
            <br />
            <div className="form-control">
  <label className="label">
    <span className="label-text text-2xl font-bold">Article Details</span>
  </label>
  <textarea name='details' className="textarea textarea-bordered w-full h-screen" defaultValue={details} placeholder="Bio"></textarea>
</div>

           
        </form>
    );
};

export default EditArticle;