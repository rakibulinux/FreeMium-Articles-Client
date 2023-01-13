import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SideCategoryButton from './sideCategoryButton/SideCategoryButton';
import { AuthContext } from './../../contexts/AuthProvider';

const SideCategory = () => {
    const {user} = useContext(AuthContext);
    const [categoryButtons, setCategoryButtons] = useState([]);
    console.log(categoryButtons);
    useEffect(()=>{
        fetch('http://localhost:5000/categoryButton')
        .then(res=>res.json())
        .then(data=>setCategoryButtons(data))
    },[])
    return (
        
            !user?.uid &&
            <div className='mt-5 p-4 sticky top-0'>
            <p className='text-base font-semibold text-gray-800'>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
            <div className="grid grid-cols-3 gap-2 mt-4">
            {
                categoryButtons.map(data=>
                    <SideCategoryButton data={data}></SideCategoryButton>
                    )
            }
            </div>
           
        </div>
        
        
    );
};

export default SideCategory;