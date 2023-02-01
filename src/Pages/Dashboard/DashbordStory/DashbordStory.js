import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
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
        <div>
            <h2 className='text-4xl text-center font-bold m-5'> All Articles</h2>
            <div className="overflow-x-auto w-auto ">
  <table className="table w-full ">
    
    <thead className='dark:bg-slate-800'>
      <tr>
        <th></th>
        <th className='text-xl'>Image</th>
        <th className='text-xl'>Story Title</th>
        <th className='text-xl'>Category</th>
        <th className='text-xl'>Status</th>
        <th className='text-xl'>Date</th>
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
        <td>{articles.category}</td>
        <td><label className="swap">
  <input type="checkbox" />
  <div className="swap-on ">< FaTimes className='text-xl'/></div>
  <div className="swap-off"><FaCheck/></div>
</label></td>
<td>{articles.articleSubmitDate}</td>
<td>
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