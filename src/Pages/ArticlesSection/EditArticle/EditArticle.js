import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import Editor from 'react-medium-editor/dist/editor';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { APIContext } from '../../../contexts/APIProvider';
import { AuthContext } from '../../../contexts/AuthProvider';

const EditArticle = () => {
  const [detailsStory, setDesc] = useState("");
  const [titles, setTitles] = useState("");
  const navigate = useNavigate();
    const {  isDarkMode, articlesRefetch } = useContext(APIContext)
    const { user } = useContext(AuthContext);
    const data = useLoaderData()
    const {articleTitle, articleDetails, _id} = data 
    const title = articleTitle.replace(/<[^>]+>/g, "");
    const details = articleDetails.replace(/<[^>]+>/g, "");
   const handleArticleUpdate = (e) =>{
    e.preventDefault();
    
    const data ={
      titles,
      detailsStory
    }
    fetch( `${process.env.REACT_APP_API_URL}/editArticle/${_id}`,{
      method: 'PUT',
      
        headers:{
          'content-type': 'application/json',
          
      },
      body: JSON.stringify(data)
      
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        articlesRefetch()
        toast.success(`${user?.displayName} story Updated`);
        navigate(`/view-story/${_id}`)

      }
     
    })


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
  {/* <textarea name='title' className="textarea textarea-bordered text-center text-4xl h-max" defaultValue={title} placeholder="Bio"></textarea> */}
  <Editor
        tag="pre"
        text={title}
        onChange={(text, medium) => {
          setTitles(text);
        }}
        options={{
          toolbar: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "anchor",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "quote",
              "unorderedlist",
              "orderedlist",
              "subscript",
              "superscript",
              "outdent",
              "indent",
              "code",
              // "image",
            ],
          },
          placeholder: {
            text: "Title of the story.",
          },

          autoLink: true,
          anchor: {
            placeholderText: "Enter reference link",
            customClassOption: "btn",
            customClassOptionText: "Refernce link",
          },
          paste: {
            cleanPastedHTML: true,
            cleanAttrs: ["style", "dir"],
            cleanTags: ["label", "meta"],
          },
          anchorPreview: {
            hideDelay: 300,
          },
        }}
      />
</div>
            
            <br />
            <div className="form-control">
  <label className="label">
    <span className="label-text text-2xl font-bold">Article Details</span>
  </label>

  {/* <textarea name='details' className="textarea textarea-bordered w-full h-screen" defaultValue={details} placeholder="Bio"></textarea> */}
  <Editor
        tag="div"
        text={details}
        onChange={(text) => setDesc(text)}
        // name='details'
        options={{
          // extensions: {
          //   embedButton: new EmbedButtonExtension(),
          // },
          toolbar: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "anchor",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "quote",
              "justified",
              "unorderedlist",
              "orderedlist",
              "subscript",
              "superscript",
              "outdent",
              "indent",
              "code",
              "horizontal",
              // "image",
            ],
          },
          placeholder: {
            text: "Write  your story.",
          },

          autoLink: true,
          anchor: {
            placeholderText: "Enter reference link",
            customClassOption: "btn",
            customClassOptionText: "Refernce link",
          },
          paste: {
            cleanPastedHTML: true,
            cleanAttrs: ["style", "dir"],
            cleanTags: ["label", "meta"],
          },
          anchorPreview: {
            hideDelay: 300,
          },
        }}
      />
</div>

           
        </form>
    );
};

export default EditArticle;