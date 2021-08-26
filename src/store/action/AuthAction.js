import { LOGIN, LOGOUT, SIGNUP } from "../Type";
import { auth, db } from "../../config/Firebase";
import UseSignUp from "../../components/signup/UseSignUp";
import { Alert } from "react-bootstrap";
export const doLogin = (email, password) => async (dispatch) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password)
        var user = userCredential.user.uid;
        console.log(user)
        dispatch({
            type: LOGIN,
            payload: user,
        });
    } catch (error) {
        alert(JSON.stringify(error))
    }
}


export const doSignUp = (setLoading, user) => async (dispatch) => {
 
    try {
        alert("naved")
        console.log("user",user);
        // setLoading(true)
        const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
        var userData = userCredential.user;
        alert("data",userData)
            // await  db.collection("users").add({
            //       ...user,
            //        uid: userData.uid
            //     });
        dispatch({
            type: LOGIN,
            payload: userData,
        });
    } catch (error) {
        alert(JSON.stringify(error))
        console.log("error",error);
        // { error && <Alert varient="danger" >{error}</Alert>}
    }
    finally{
        // setLoading(false)
    }
}

// export const doLogout = () => async (dispatch) =>{
//     try {
//         const res =await auth.signOut()
//         console.log(res)
//         dispatch({
//             type: LOGOUT
//         });
//     } catch (error) {
// alert(JSON.stringify(error))
//     }
// }


// export const doSignUp = (obj, history, setSpin) => async (dispatch) => {
//     try {
//     //   setSpin(true);
//       // firebase login
//       const result = await auth.createUserWithEmailAndPassword(
//         obj.Email,
//         obj.Password
//       );
//     //   await result.user.updateProfile({
//     //     displayName: obj.FName + obj.LName,
//     //   });
//       await result.user.sendEmailVerification();
//       await auth.signOut();

//       await db.collection("OurSubscriber").add({ Email: obj.Email });
//       console.log("uID", result.user.uid);
//       await db.collection("User").add({
//         id: result.user.uid,
//         Name: obj.FName + obj.LName,
//         Email: obj.Email,
//         Phone: obj.Phone,
//         Password: obj.Password,
//         joinDate: new Date().toLocaleDateString(),
//         LastSignIn: new Date().toLocaleString(),
//       });
//       console.log("result", result.user.emailVerified);

//       dispatch({
//         type: SIGNUP,
//         payload: result.user,
//       });
//       setSpin(false);
//       history.replace("/Login");
//       alert("Plz Check Your Email For Verification");
//     } catch (error) {
//       history.replace("/SignUp");
//       setSpin(false);
//       alert(JSON.stringify(error));
//     }
//   };
// firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });