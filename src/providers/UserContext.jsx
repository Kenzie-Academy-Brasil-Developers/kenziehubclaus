import { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserProvider({children}) {
    const [currUser, setCurrUser] = useState(null);
    
    function saveToken(currToken) {
        localStorage.setItem('@Token', currToken);
    }

    function saveUserId(currId) {
        localStorage.setItem('@UserId', currId);
    }

    return (
        <UserContext.Provider value={{
            currUser, 
            setCurrUser, 
            saveToken, 
            saveUserId 
        }}>
            {children}
        </UserContext.Provider>
    );
};