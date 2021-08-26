import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { doLogin } from '../../store/action/AuthAction';
// import { doLogout } from '../../store/Actions/AuthAction';
export default function UseLogin() {
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const  dispatch = useDispatch();
        const doLoginUser = () =>{
            dispatch(doLogin(email, password));
        }
        // const doLogoutUser = () =>{
        //     dispatch(doLogout());
        // }

    return[setEmail,setPassword,doLoginUser]
}