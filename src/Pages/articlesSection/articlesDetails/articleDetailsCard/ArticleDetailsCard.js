<<<<<<< HEAD
import React from 'react';

const ArticleDetailsCard = ({articleData}) => {
    const {articleDetails,articleImg,articleRead,articleSubmitDate,articleTitle,writerImg,writerName,_id} = articleData;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure><img src={articleImg} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
        </div>
    );
};

export default ArticleDetailsCard;
=======
import React from "react";

const ArticleDetailsCard = ({ articleData }) => {
  const {
    articleDetails,
    articleImg,
    articleRead,
    articleSubmitDate,
    articleTitle,
    writerImg,
    writerName,
    _id,
  } = articleData;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={articleImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: articleDetails }} />
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsCard;
>>>>>>> 8950e6c375b446e6ed22868157ad31cfb88562dc
