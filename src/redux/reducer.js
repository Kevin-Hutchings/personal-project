const initialState = {
    username: '',
    email: '',
    password: '',
    isLoggedIn: false,
};

const FIELD = 'field';
const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

function authReducer(state = initialState, action) {
    switch(action.type) {
        case FIELD: {
            return {
                ...state,
                [action.fieldName]: action.payload,
            }
        };
        case REGISTER: {
            const { data } = action.payload;
            return {
                ...state,
                username: data.username,
                email: data.email,
                password: data.password,
            }
        }
        case LOGIN: {
            const { data } = action.payload;
            return {
                ...state,
                username: data.username,
                password: data.password,
                isLoggedIn: true,
            }
        };
        case LOGOUT: {
            return {
                ...state,
                isLoggedIn: false,
            }
        };
        default: return state;
    }
}

export default authReducer;