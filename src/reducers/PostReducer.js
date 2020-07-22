import { ADD_POST, EDIT_POST, UPDATE_POST, DELETE_POST, VIEW_CHECKBOX } from '../constants/PostTypes';
// const dieubadien = [
//     {
//         id: 0,
//         content: "Diệu Quá Bà Khùng",
//         editing: false,
//         complete: false,
//     },
//     {
//         id: 1,
//         content: "Hà Quá Bà Khùng",
//         editing: false,
//         complete: true,
//     }, {
//         id: 2,
//         content: "Quyết Quá Bà Khùng",
//         editing: false,
//         complete: false,
//     },
// ]
const postReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POST:
            return [
                {
                    id: (state.length === 0) ? 0 : state[0].id + 1,
                    content: action.content,
                    editing: false,
                    complete: false,
                },
                ...state
            ];

        case DELETE_POST:
            return state.filter((post) => post.id !== action.id);

        case EDIT_POST:
            return state.map((post) => post.id === action.id
                ? { ...post, editing: !post.editing }
                : post);

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