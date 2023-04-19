import React from 'react';
import { useLoaderData } from 'react-router';
import NewsSummeryCard from '../Shared/NewsSummeryCard';

const Categories = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h3>this is categories {categoryNews.length}</h3>
            {
                categoryNews.map(category => <NewsSummeryCard key={category._id} newsData={category} />)
            }
        </div>
    );
};

export default Categories;