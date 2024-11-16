import React, { useEffect, useState } from 'react';
import { fetchFavorites } from '../firebaseConfig';
import BlogCard from '../components/BlogCard';

const FavoritesPage = () => {
    const [favoriteBlogs, setFavoriteBlogs] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            const favorites = await fetchFavorites();
            setFavoriteBlogs(favorites);
        };
        getFavorites();
    }, []);

    return (
        <div>
            <h1>My Favorites</h1>
            <div>
                {favoriteBlogs.map(blog => (
                    <BlogCard key={blog.id} blog={blog} showDeleteIcon={false} />
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;
