import * as types from '../constants/PostTypes';

export const addPost = ( content) => ({
    type: types.ADD_POST,
    content
});

export const editPost = (id) => ({
    type: types.EDIT_POST,
    id
});

export const updatePost = (id, newContent) => ({
    type: types.UPDATE_POST,
    id,
    newContent
});

export const deletePost = (id) => ({
    type: types.DELETE_POST,
    id: id
});