// import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { APIContext } from "../../../contexts/APIProvider";
// import { deleteArticle, saveArticle } from "../../../store/savedArticlesSlice";
// import ArticlesCard from "../../ArticlesSection/ArticlesCard/ArticlesCard";
// import { useSearchParams } from "react-router-dom";

// const SearchDetails = ({query}) => {
//   const dispatch = useDispatch();
//   const { searchArticles } = useContext(APIContext);

//   const handleSave = (data) => {
//     dispatch(saveArticle(data))
//       .then(() => {
//         console.log("data saved");
//         toast.success("Saved article");
//       })
//       .catch((error) => {
//         console.log(error.message);
//         toast.error(error.message);
//       });
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteArticle(id))
//       .then(() => {
//         console.log("data deleted");
//         toast.success("Successfully Unsave");
//       })
//       .catch((error) => {
//         console.log(error.message);
//         toast.error(error.message);
//       });
//   };
//   return (
//     <div>
//       {searchArticles.map((data) => (
//         <ArticlesCard
//           data={data}
//           key={data?._id}
//           handleSave={handleSave}
//           handleDelete={handleDelete}
//         ></ArticlesCard>
//       ))}
//     </div>
//   );
// };

// export default SearchDetails;
