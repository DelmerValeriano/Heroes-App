import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react'

import { types } from '../../types/types';

import { AuthContext } from '../../auth/authContext';


export const LoginScreen = () => {

  const navigate =useNavigate();
  const {dispatch} =useContext(AuthContext);



  const handleLogin=()=>{

    const actionUser ={
      type: types.login,
      payload :{
        name:'Delmer'
      }
    }


    dispatch(actionUser);

    const lastPath = localStorage.getItem('listPath') || '/marvel';

    navigate(lastPath, {replace:true});
     
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>
      <button 
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
      
    </div>
  )
}
