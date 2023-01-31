import { useSelector } from 'react-redux';
import { Outlet , Navigate } from 'react-router-dom';

export function RoutesCommon() {
    const userAuth = useSelector(({user}) => user.isAuth);

    return !userAuth ? <Outlet/> : <Navigate to='/home'/>
}