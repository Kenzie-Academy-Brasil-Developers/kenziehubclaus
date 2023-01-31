import { useSelector } from 'react-redux';
import { Outlet , Navigate } from 'react-router-dom';

export function RoutesAuth() {
    const user = useSelector(({user}) => user.isAuth);
    console.log(user)

    return user ? <Outlet/> : <Navigate to='/login'/>
}