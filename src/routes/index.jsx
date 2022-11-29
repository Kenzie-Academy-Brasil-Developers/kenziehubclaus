import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';

export function RoutesMain() {
    return (
        <Routes>
            <Route path='/' element={ <Login/> }/>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/signup' element={ <SignUp/> }/>
            <Route path='/home' element={ <Home/> }/>
        </Routes>
    )
};