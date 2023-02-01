import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { SignUp } from '../pages/SignUp';
import { RoutesAuth } from './routesAuth';

export function RoutesMain() {
    return (
        <Routes>
            <Route path='/' element={ <Login/> }/>
            <Route path='/login' element={  <Login/> }/>
            <Route path='/signup' element={ <SignUp/> }/>
            <Route element={ <RoutesAuth/> }>
                <Route path='/home' element={ <Dashboard/> }/>
            </Route>
            <Route path='*' element={ <NotFound/> }/>
        </Routes>
    )
}
