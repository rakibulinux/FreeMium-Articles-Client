import React, { useContext, useEffect, useState } from "react";
import "./WriteStories.css";
import Editor from "react-medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/beagle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const WriteStories = ({ userDetails }) => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  // console.log(title);
  // console.log(desc);

  const handleSubmitStories = () => {
    const body = {
      articleDetails: desc,
      userId: user?.uid,
      writerName: user?.displayName,
      writerImg: user?.photoURL,
      articleTitle: title,
      articleSubmitDate: "Jan 17, 2023",
      articleRead: 12,
      articleImg: "",
    };
    console.log(body);
    const confHeader = {
      "Content-Type": "application/json",
    };

    fetch(`${process.env.REACT_APP_API_URL}/add-story`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("usedPhoneToken")}`,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`${user?.displayName} added new story`);
        //   navigate("/dashboard/seller/my-products");
      });
  };
  //   });
  //     fetch(
  //       `${process.env.REACT_APP_API_URL}/add-story`,

  //       {
  //         method: "POST",
  //         headers: {
  //           confHeader,
  //           authorization: `bearer ${localStorage.getItem("freeMiumToken")}`,
  //         },
  //         body: JSON.stringify(body),
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.status) {
  //           console.log(data.message);
  //           //   navigate(`/new-storystory/${res.data.data}`);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  return (
    <>
      <div className="pub-button">
        <button onClick={handleSubmitStories}>Publish</button>
      </div>
      <div
        style={{
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        <h2>Title of the Story</h2>
      </div>

      {/* <ContentEditable
        html={title} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={(e) => setTitle(e.target.value)} // handle innerHTML change
      /> */}
      <Editor
        tag="pre"
        text={title}
        onChange={(text, medium) => {
          setTitle(text);
          // console.log(medium);
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
              // "unorderedlist",
              // "orderedlist",
              // "subscript",
              // "superscript",
              "outdent",
              "indent",
              "code",
              "image",
            ],
          },
          placeholder: {
            text: "Write  your story.",
          },

          autoLink: true,
          anchor: {
            placeholderText: "Enter reference link",
            // customClassOption: "btn",
            // customClassOptionText: "Refernce link",
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
      <div
        style={{
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        <h2>Description of story</h2>
      </div>
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
            ],
          },
          placeholder: {
            text: "Write  your story.",
          },

          autoLink: true,
          anchor: {
            placeholderText: "Enter reference link",
            // customClassOption: "btn",
            // customClassOptionText: "Refernce link",
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
      {/* <ContentEditable
        html={desc} // innerHTML of the editable div
        style={{
          minHeight: "50vh",
        }}
        className="medium_description"
        disabled={false} // use true to disable edition
        onChange={(e) => setDesc(e.target.value)} // handle innerHTML change
      /> */}
    </>
  );
};

export default WriteStories;
