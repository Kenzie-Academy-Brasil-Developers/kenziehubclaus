import { RoutesMain } from './routes';
import { GlobalStyles } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from './providers/Providers';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import { verifyUser } from './store/modules/user/actions';

export function App() {
  return (
    <>
        <Provider store={store}>
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
        </Provider>
    </>
  )
}

