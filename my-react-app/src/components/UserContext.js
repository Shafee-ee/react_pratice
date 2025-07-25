import { createContext, useContext } from "react"

//create Context
export const UserContext = createContext();

//Custom hook (optional, for cleaner usage)
export const useUser = () => useContext(UserContext)