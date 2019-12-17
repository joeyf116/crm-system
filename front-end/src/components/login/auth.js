import React, {useEffect, useState} from "react";
import firebaseConfig from '../../config'
import 'firebase';
import { app } from "firebase";
export const AuthContext = React.createContext();
const AuthProvider = ({children})=>{
    const[currentUser, setCurrentUser]= useState(null);
useEffect(()=>{
    firebaseConfig.auth().onAuthStateChanged(setCurrentUser);
},[]);
return(
    <AuthContext.Provider
    value={{currentUser}}>{children}</AuthContext.Provider>
)

}

 export default AuthProvider;