import { PostInterface } from '../../interfaces';

export const fetchPosts = () => ({
   type: 'POSTS/FETCH',
});

export const setPosts = (payload: PostInterface[]) => ({
   type: 'POSTS/SET',
   payload,
});

export const createPosts = (payload: PostInterface) => ({
   type: 'POSTS/ADD',
   payload,
});

export const deletePost = (payload: PostInterface) => ({
   type: 'POSTS/DELETE',
   payload,
});

export const editPost = (payload: PostInterface) => ({
   type: 'POSTS/PUT',
   payload,
});
