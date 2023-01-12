import React from 'react';
import { useState, useEffect } from 'react';
import ArticlesCard from './articlesCard/ArticlesCard';


const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allArticles')
        .then(res=>res.json())
        .then(data=>setArticles(data))
    },[])
    return (
        <div className='grid grid col-span-1 w-full'>
            {
                articles.map((data)=>
                      <ArticlesCard data={data} key={data?._id}></ArticlesCard>
                    )
            }
        </div>
    );
};

export default Articles;