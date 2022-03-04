import { AppRouter } from "./routers/AppRouter"
import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import {authReducer} from './auth/authReducer'

const init= ()=>{
  //en el localStorage solo se puede grabar string
  //cuando queremos mandar u objeto se utiliza el JSON.parse
  return JSON.parse(localStorage.getItem('user'))  || {logged: false}
}


export const HeroresApp = () => {


  const  [user,dispatch] =  useReducer(authReducer,{},init);

  useEffect(()=>{
    if (!user) return;
    localStorage.setItem('user',JSON.stringify(user));
  },[user])


  return (
    <AuthContext.Provider value={{user,dispatch}}>

      <AppRouter/>

    </AuthContext.Provider>
  
  )
}
