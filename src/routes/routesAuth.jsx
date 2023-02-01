import { useSelector } from 'react-redux';
import { Outlet , Navigate } from 'react-router-dom';

export function RoutesAuth() {
    const userAuth = useSelector(({user}) => user.isAuth);

    return userAuth ? <Outlet/> : <Navigate to='/login'/>
}