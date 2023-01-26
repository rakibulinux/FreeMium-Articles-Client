import React from 'react';
import RelatedTopics from './RelatedTopics/RelatedTopics';
import TopWriters from './TopWriters/TopWriters';
import TotalFollowerAndTotalArticle from './TotalFollowerAndTotalArticle/TotalFollowerAndTotalArticle';

const RelatedTopicsTopWriters = () => {
    return (
        <div>
            <TotalFollowerAndTotalArticle />
            <RelatedTopics />
            <TopWriters />
        </div>
    );
};

export default RelatedTopicsTopWriters;