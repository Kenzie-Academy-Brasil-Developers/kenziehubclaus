import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { SignUp } from '../pages/SignUp';
import 'react-toastify/dist/ReactToastify.css';

export function RoutesMain() {
    const [currUser, setCurrUser] = useState(null);
    return (
        <Routes>
            <Route path='/' element={ <Login currUser={currUser} setCurrUser={setCurrUser}/> }/>
            <Route path='/login' element={  <Login currUser={currUser} setCurrUser={setCurrUser}/> }/>
            <Route path='/signup' element={ <SignUp/> }/>
            <Route path='/home' element={ <Dashboard currUser={currUser}/> }/>
            <Route path='*' element={ <NotFound/> }/>
        </Routes>
    )
};