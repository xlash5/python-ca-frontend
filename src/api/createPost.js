import api from './api';

export default async (creatorId, postText, imageUrl, categoryId) => {
    try {
        const response = await api.post('/api/createPost', {
            creator_id: creatorId,
            post_text: postText,
            media: imageUrl,
            timestamp: new Date().getTime(),
            post_category: categoryId
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};