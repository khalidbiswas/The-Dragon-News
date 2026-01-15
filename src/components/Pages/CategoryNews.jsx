import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [news, setNews] = useState([]);

    useEffect(() => {

        if (id === '0') {
            const filteredNews = data;
            setNews(filteredNews);

        }
        else if (id === '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick === true);
            setNews(filteredNews);

        }
        else {
            const filteredNews = data.filter(news => news.category_id === Number(id));
            setNews(filteredNews);

        }
    }, [data, id])
    // console.log(news);

    return (

        <div>
            <h2> total<span className='text-red-500 font-bold'> {news.length}</span> news found</h2>
            {news.map(singleNews => <NewsCard key={singleNews.id} singleNews={singleNews} />)}
        </div>
    );
};

export default CategoryNews;