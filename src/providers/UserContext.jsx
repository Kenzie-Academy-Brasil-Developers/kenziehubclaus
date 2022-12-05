import { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserProvider({children}) {
    const [currUser, setCurrUser] = useState(null);
    const [load, setLoad] = useState(false);
    
    function saveToken(currToken) {
        localStorage.setItem('@Token', currToken);
    }

    function saveUserId(currId) {
        localStorage.setItem('@UserId', currId);
    }

    return (
        <UserContext.Provider value={{ currUser , setCurrUser , load , setLoad , saveToken , saveUserId }}>
            {children}
        </UserContext.Provider>
    );
};