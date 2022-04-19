import api from './api';

export default async (postId, userId) => {
    try {
        const response = await api.delete('/api/deletePost', {
            data: {
                postid: postId,
                userid: userId
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};