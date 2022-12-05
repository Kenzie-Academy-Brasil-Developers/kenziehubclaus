import { RoutesMain } from './routes';
import { GlobalStyles } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from './providers/Providers';

export function App() {
  return (
    <>
        <Providers>
          <GlobalStyles/>
          <RoutesMain/>
        </Providers>
    </>
  );
}


