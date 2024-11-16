/* eslint-disable react/prop-types */
import { Card, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToFavorites, removeFromFavorites, fetchFavorites } from '../firebaseConfig';

const BlogCard = (props) => {
    const { blog, deleteBlog = () => {}, showDeleteIcon = true } = props;
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Check if the blog is already in the favorites when the component mounts
        const checkIfFavorite = async () => {
            const favorites = await fetchFavorites();
            const isFav = favorites.some(favBlog => favBlog.id === blog.id);
            setIsFavorite(isFav);
        };
        checkIfFavorite();
    }, [blog.id]);

    const handleFavoriteToggle = async () => {
        if (isFavorite) {
            await removeFromFavorites(blog.id);
            setIsFavorite(false);
        } else {
            await addToFavorites(blog);
            setIsFavorite(true);
        }
    };

    return (
        <Card style={{ position: 'relative' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={blog.image}
                title={blog.title}
            />
            {showDeleteIcon && (
                <IconButton
                    style={{ position: 'absolute', right: '10px', top: '5px' }}
                    aria-label="delete"
                    size="small"
                    onClick={() => deleteBlog(blog.id)}
                >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {blog.description}
                </Typography>
                <Chip label={blog.category} variant="outlined" />
            </CardContent>
            <CardActions>
                <IconButton
                    color="error"
                    onClick={handleFavoriteToggle}
                >
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => navigate(`/viewblogs/${blog.id}`)}
                >
                    Learn More
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default BlogCard;
