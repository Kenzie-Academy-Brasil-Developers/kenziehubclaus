import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const UserContext = createContext({});

export function UserProvider({children}) {
    const [currUser, setCurrUser] = useState(null);
    const [loadingPage, setLoadingPage] = useState(true);
    const navigate = useNavigate();

    function saveToken(currToken) {
        localStorage.setItem('@Token', currToken);
    }

    function saveUserId(currId) {
        localStorage.setItem('@UserId', currId);
    }

    useEffect(() => {
        const token = localStorage.getItem('@Token');
        async function loadUser() {

            if (!token) {
                setLoadingPage(false);
                navigate('/');
                return
            }

        
            try {
                const { data } = await api.get('/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setCurrUser(data);
            } catch (error) {
                console.error(error);
                localStorage.clear();
                navigate('/');
            } finally {
                setLoadingPage(false);
            }
        }
        loadUser();
    }, [])

    return (
        <UserContext.Provider value={{
            currUser, 
            setCurrUser, 
            saveToken, 
            saveUserId,
            loadingPage 
        }}>
            {children}
        </UserContext.Provider>
    )
}