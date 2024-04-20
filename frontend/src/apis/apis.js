import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

console.log(process.env);

export const login = async (user) => {
    try {
        const response = await axios.post(baseUrl + '/users', user);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
    }
}

export const createPost = async (post) => {
    const response = await axios.post(baseUrl + '/posts', post);
    return response.data;
}

export const getPosts = async () => {
    const response = await axios.get(baseUrl + '/posts');
    return response.data;
}

export const getMyPosts = async (owner) => {
    const response = await axios.get(baseUrl + '/users/' + owner + '/posts');
    return response.data;
}

export const deletePost = async (id) => {
    const response = await axios.delete(baseUrl + '/posts/' + id);
    return response.data;
}

export const updatePost = async (post) => {
    console.log(post)
    const response = await axios.put(baseUrl + '/posts/' + post._id, post);
    console.log(response)
    return response.data;
}