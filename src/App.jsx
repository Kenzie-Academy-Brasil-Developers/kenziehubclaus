import { RoutesMain } from './routes';
import { GlobalStyles } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { api } from './services/api';
import { createUser, loadingUser, setAuth } from './store/modules/user/actions';


export function App() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    async function loadUser() {
      const token = localStorage.getItem('@Token');

      if (!token) {
          dispatch(loadingUser(false));
          navigate('/');
          return
      }

      try {
          const response = await api.get('/profile', {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          });
          dispatch(createUser(response.data));
          dispatch(setAuth(true));
      } catch (error) {
          console.error(error);
          localStorage.clear();
          navigate('/');
      } finally {
        dispatch(loadingUser(false));
      }
    }
    useEffect(() => {loadUser()}, [])
   
  return (
    <>
            <GlobalStyles/>
            <ToastContainer
                    toastStyle={{ backgroundColor: 'var(--grey-2)' }}
                    position='top-right'
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    theme='dark'
                    limit={2}
                />
            <RoutesMain/>
    </>
  )
}

