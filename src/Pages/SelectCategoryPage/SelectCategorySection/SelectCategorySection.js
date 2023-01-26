import React from 'react';
import SelectCategory from '../SelectCategory';
import RelatedTopicsTopWriters from './../RelatedTopicsAndTopWriters/RelatedTopicsTopWriters';
import './SelectCategorySection.css';
const SelectCategorySection = () => {
    return (
        <div className="grid columns-grid px-7">
            <SelectCategory />
            <RelatedTopicsTopWriters />
        </div>
    );
};

export default SelectCategorySection;