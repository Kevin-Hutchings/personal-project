const initialState = {
    title: '',
    isWatched: false,
}

const ADD_TITLE = 'ADD_TITLE';
const DELETE_TITLE = 'DELETE_TITLE';

export const addTitle = (title) => {
    return {
        type: ADD_TITLE,
        payload: title,
    }
}

export const deleteTitle = () => {
    return {
        type: DELETE_TITLE,
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TITLE:
            return {
                ...state,
                title: action.payload.title,
            }
        case DELETE_TITLE:
            return {
                title: '',
                isWatched: false,
            }
        default: return state;
    }
}