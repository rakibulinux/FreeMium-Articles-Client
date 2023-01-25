import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SelectCategory = () => {
    const categoryData = useLoaderData();
    console.log(categoryData);
    return (
        <div>
            
        </div>
    );
};

export default SelectCategory;