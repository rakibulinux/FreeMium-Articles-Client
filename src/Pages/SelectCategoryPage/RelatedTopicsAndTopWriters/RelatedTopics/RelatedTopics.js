import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SideCategoryButton from './../../../sideCategory/sideCategoryButton/SideCategoryButton';

const RelatedTopics = () => {
    const [category, setCategory] = useState([]);
    // console.log(category);
    useEffect(()=>{
        fetch('http://localhost:5000/categoryButton')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[category])


    return (
        <div>
            <h4 className='text-gray-900 font-semibold text-base mb-4 mt-10 border-x-0 border-t-0'>Related Topics</h4>
            <div className='grid grid-cols-3 gap-2'>
                {
                    category.map(data=><SideCategoryButton category={data} key={data?._id} />)
                }
            </div>
        </div>
    );
};

export default RelatedTopics;