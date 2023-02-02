import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const DashbordStory = () => {
    const {data: allArticles = [],} = useQuery({
        queryKey: ['allArticles'],
        queryFn: async() =>{
            const res = await fetch(`${process.env.REACT_APP_API_URL}/allArticles`)
            const data = await res.json()
            return data
        }
    })
    // console.log(allArticles);
    return (
        <div className=' '>
            <h2 className='text-4xl text-center font-bold m-5'> All Articles</h2>
            <div className="overflow-visible w-full   ">
  <table className="table  ">
    
    <thead className='dark:bg-slate-800 '>
      <tr>
        <th></th>
        <th className='text-xl'>Image</th>
        <th className='text-xl'>Story Title</th>
        <th className='text-xl hidden lg:table-cell'>Category</th>
        <th className='text-xl hidden lg:table-cell p-0 '>Status</th>
        <th className='text-xl hidden lg:table-cell '>Date</th>
        <th className='text-xl'>Actions</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        allArticles.map((articles, i) => <tr  key={articles._id} className="hover bg-slate-800">
        <th>{i+1}</th>
        <td><div className="avatar">
  <div className="w-16 rounded">
    <img src={articles.articleImg} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div></td>
        <td dangerouslySetInnerHTML={{ __html: articles.articleTitle.slice(0,50) }}
            />
        <td className='hidden lg:table-cell'>{articles.category}</td>
        <td className='hidden lg:table-cell'><label className="swap">
  <input type="checkbox" />
  <div className="swap-on ">< FaTimes /></div>
  <div className="swap-off"><FaCheck/></div>
</label></td>
<td className='hidden lg:table-cell'>{articles.articleSubmitDate}</td>
<td >
<div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-sm m-1">Actions</label>
  <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-auto">
    <li><Link>Edit article</Link> </li>
    <li><Link>Delete</Link></li>
  </ul>
</div>
</td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default DashbordStory;
