import { ADD_POST, EDIT_POST, UPDATE_POST, DELETE_POST, VIEW_CHECKBOX } from '../constants/PostTypes';

let initialId = 0

const postReducer = (state = [], action) => {
    initialId = initialId + 1
    switch (action.type) {
        case ADD_POST:
            return [
                {
                    id: initialId,
                    content: action.content,
                    complete: false,
                },
                ...state
            ];

        case DELETE_POST:
            return state.filter((post) => post.id !== action.id);

        case EDIT_POST:
            return state.map((post) => post.id === action.id
                ? {
                    ...post,
                    content: action.content
                } : post);

        case UPDATE_POST:
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        content: action.newContent,
                        editing: !post.editing
                    }
                } else {
                    return post;
                }
            });

        case VIEW_CHECKBOX:
            return state.map(post => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        complete: !post.complete,
                    }
                } else {
                    return post;
                }
            });

        default:
            return state;
    }
}

export default postReducer;