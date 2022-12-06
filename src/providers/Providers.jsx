import { TechProvider } from "./TechContext";
import { UserProvider } from "./UserContext";


export function Providers({children}) {
    return (
        <UserProvider>
                {children}
        </UserProvider>
    );
};

// export function Providers({children}) {
//     return (
//         <UserProvider>
//             <TechProvider>
//                 {children}
//             </TechProvider>
//         </UserProvider>
//     );
// };