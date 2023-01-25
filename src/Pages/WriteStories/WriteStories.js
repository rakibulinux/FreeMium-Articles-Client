import React, { useContext, useState } from "react";
import "./WriteStories.css";
import Editor from "react-medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/beagle.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { format } from "date-fns";
import { APIContext } from "../../contexts/APIProvider";
import Spinner from "../../components/Spinner/Spinner";
import Creator from "../AnotherCreatorPage/Creator";

const WriteStories = ({ userDetails }) => {
  const { user } = useContext(AuthContext);
  const { articlesRefetch } = useContext(APIContext);
  const { categoryButton, isLoading } = useContext(APIContext);
  

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  // const [category, setCategory] = useState("");
  const imageHostKey = process.env.REACT_APP_IMG_BB_KEY;
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();
  const date = format(new Date(), "PP");

  const handleSubmitStories = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const category = form.category.value;
    const number = form.number.value;
    console.log(category);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          toast.success("Image upload success");
          const body = {
            articleDetails: desc,
            userId: user?.email,
            writerName: user?.displayName,
            writerImg: user?.photoURL,
            articleTitle: title,
            articleSubmitDate: date,
            articleRead: number,
            articleImg: imgData.data.url,
            category,
          };
          
          // Update in database
          fetch(`${process.env.REACT_APP_API_URL}/add-story`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("freeMiumToken")}`,
            },
            body: JSON.stringify(body),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success(`${user?.displayName} added new story`);
              articlesRefetch();
              navigate("/");
            });
        }
      });
  };

  if (isLoading) {
    return <Spinner />;
  }
  return user?.uid ? (
    <form onSubmit={handleSubmitStories} className=" w-10/12 mx-auto">
      <div className="flex">
        <button
          className="bg-green-600 text-white py-2 px-3 rounded-3xl ml-auto"
          // onClick={}
        >
          Publish
        </button>
      </div>
      <div className="my-2.5 text-center">
        <h2>Title of the Story</h2>
      </div>
      <Editor
        tag="pre"
        text={title}
        onChange={(text, medium) => {
          setTitle(text);
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

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Read Time</span>
        </label>
        <input
          type="number"
          name="number"
          placeholder="Read Time"
          className="input input-bordered border-1 border-dashed w-full"
        />
      </div>

      <select name="category" className="my-4 select select-bordered w-full">
        {categoryButton.map((category, idx) => (
          <option key={idx} value={category?.CategoryName}>
            {categoryButton.length && category?.CategoryName}
          </option>
        ))}
      </select>
      <div className="flex items-center justify-center">
        <label
          htmlFor="image"
          className="flex flex-col items-center justify-center w-full h-36 border-1 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {image ? (
              <img src={image} alt="" />
            ) : (
              <>
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </>
            )}
          </div>

          <input
            onChange={(e) => {
              setImage(e.target.value);
            }}
            id="image"
            name="image"
            type="file"
            className="hidden"
            accept="image/*"
          />
        </label>
      </div>
      {/* <div className="m-0 ml-2.5 text-center">
        <h2>Description of story</h2>
      </div> */}
      <Editor
        tag="div"
        text={desc}
        onChange={(text) => setDesc(text)}
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
    </form>
  ) : (
    <Creator />
  );
};

export default WriteStories;
// dfdfdfd
