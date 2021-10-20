const initialState = {
    username: '',
    email: '',
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT';

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user,
    }
}

export const logout = () => {
    return { 
        type: LOGOUT,
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
            }
        case LOGOUT: 
            return {
                username: '',
                email: '',
            }
        default: return state;
    }
}