import { useEffect, useState } from 'react';
import api from '../api/api';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loadingPosts, setLoadingPosts] = useState(false);

    const getPosts = async (categoryId) => {
        setLoadingPosts(true);
        try {
            if (categoryId === 6) {
                const response = await api.get('/api/ViewAllPosts');
                setResults(response.data.results);
            } else {
                const response = await api.get(`/api/ViewPostByCategory/${categoryId}`);
                setResults(response.data.results);
            }
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
        setLoadingPosts(false);
    };

    useEffect(() => {
        getPosts(6);
    }, []);

    return [getPosts, results, errorMessage, loadingPosts];
};