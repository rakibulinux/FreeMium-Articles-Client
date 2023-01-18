import React from 'react';
import Particle from '../../../components/particleJS/Particle';
import { useLoaderData } from 'react-router-dom';
import ArticleDetailsCard from './articleDetailsCard/ArticleDetailsCard';

const ArticlesDetails = () => {
    const articleData= useLoaderData();
    return (
        <div className='container mx-auto mt-20'>
            <Particle />
           <ArticleDetailsCard articleData={articleData} />
        </div>
    );
};

export default ArticlesDetails;