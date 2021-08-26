import { useState } from "react";
import {useDispatch} from "react-redux";
import { doSignUp } from "../../store/action/AuthAction";
export default function UseSignUp(){
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [phone,setPhone]=useState("");
const [country,setCountry]=useState("");
const [loading,setLoading]=useState(false);
const [name,setName]=useState("")
const dispatch=useDispatch();
const doSignUpUser = () =>{
    const user={
        email: email,
        password: password,
        country: country,
        name: name,
        phone: phone
    }
   console.log("value ",user);
    dispatch(doSignUp(user,setLoading));
  
}

return [email,password,phone,country,name,setEmail,setPassword,doSignUpUser,setLoading,setName,setPhone,setCountry];
}