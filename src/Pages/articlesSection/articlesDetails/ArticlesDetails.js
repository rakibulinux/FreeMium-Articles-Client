import React from 'react';
import Particle from '../../../components/particleJS/Particle';
import { useLoaderData } from 'react-router-dom';
import ArticleDetailsCard from './articleDetailsCard/ArticleDetailsCard';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const ArticlesDetails = () => {
<<<<<<< HEAD
    const articleData = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div className='container mx-auto mt-20'>
            {
                !user?.uid && <Particle />
            }
            <ArticleDetailsCard articleData={articleData} />
=======
    const articleData= useLoaderData();
    const {user} =useContext(AuthContext);
    return (
        <div className='container mx-auto mt-20'>
           {
             !user?.uid &&  <Particle />
           } 
           <ArticleDetailsCard articleData={articleData} />
>>>>>>> 8950e6c375b446e6ed22868157ad31cfb88562dc
        </div>
    );
};

export default ArticlesDetails;