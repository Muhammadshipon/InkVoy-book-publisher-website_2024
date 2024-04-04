import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
 const signUpUser =(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password);
 }

 const signInUser =(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password);
 }

 const signOutUser =()=>{
  return signOut(auth)
 }

 useEffect(()=>{
  const unSubscribed = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
  })
  return ()=>{
    unSubscribed();
  }
 },[])

 const authInfo = {
  signUpUser,
  signInUser,
  signOutUser,
  user
 }
  return (
    <div>
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
}
export default AuthProvider;