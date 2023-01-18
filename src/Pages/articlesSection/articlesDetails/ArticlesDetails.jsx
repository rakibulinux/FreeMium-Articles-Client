import React, { useContext } from 'react';
import Particle from '../../../components/particleJS/Particle';
import { useLoaderData } from 'react-router-dom';
import ArticleDetailsCard from './articleDetailsCard/ArticleDetailsCard';
import { AuthContext } from '../../../contexts/AuthProvider';

const ArticlesDetails = () => {
    const articleData= useLoaderData();
    const {user} = useContext(AuthContext);
    return (
        <div className='container mx-auto my-20'>
          {
         !user?.uid && <Particle />
        }
           <ArticleDetailsCard articleData={articleData} />
        </div>
    );
};

export default ArticlesDetails;