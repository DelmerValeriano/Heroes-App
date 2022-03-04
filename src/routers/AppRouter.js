
import { Routes, Route,BrowserRouter  } from 'react-router-dom';
import React from 'react'

import { LoginScreen } from '../components/login/LoginScreen';

import { DaschboardRoutes } from './DaschboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter >

      
        <Routes>
            
            {/* <Route path="/login" element={<LoginScreen />} />
             */}

            <Route path="/login" element={
                <PublicRoute>

                  <LoginScreen/>   

                </PublicRoute>
            }
            />


            <Route path="/*" element={
                <PrivateRoute>

                  <DaschboardRoutes/>   

                </PrivateRoute>
            }
            />

            {/* <Route path="/*" element={<DaschboardRoutes />} /> */}



        </Routes> 
    </BrowserRouter >
  )
}
