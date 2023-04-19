import React from 'react';
import { useLoaderData } from 'react-router';
import NewsSummeryCard from '../Shared/NewsSummeryCard';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <h1>this is home {news.length}</h1>
            {
                news.map(n => <NewsSummeryCard key={n._id} newsData={n} />)
            }
        </div>
    );
};

export default Home;