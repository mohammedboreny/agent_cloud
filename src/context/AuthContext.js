import { createContext, useState } from "react";

export const AuthContext = createContext()

 // for login with google, as I readed client_id is the important key
 const clientId =
 "111242181519-tan7ba30id91j585qai70aaeht32lie9.apps.googleusercontent.com";
const secretId = "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";

export default function AuthContextProvider({children})
{

    const [auth,setAuth] = useState(false)
    const [loginGoogle,setLoginGoogle] = useState(false)
    const [profile,setProfile]= useState({})

    return (
        <AuthContext.Provider value={{auth,setAuth,profile,setProfile,clientId,loginGoogle,setLoginGoogle}}>
            {children}
        </AuthContext.Provider>
    )
}