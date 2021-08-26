import { LOGIN,LOGOUT, SIGNUP } from "../Type";
const initialState = {
    isUserLoggedIn: false,
    email: null,
    password: null
}
function AuthReducer(state=initialState, action) {

switch (action.type) {
    case LOGIN:
        console.log("reducer is working",action.payload);
        return{
            ...state,
            isUserLoggedIn: true,
            user: action.payload
        };
        case LOGOUT:
        return{
            ...state,
            isUserLoggedIn: false,
            user: null
        };
     
                     
        
    default:
        return state;
}
}
export default AuthReducer;