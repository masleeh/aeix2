"use client"

import useFormModal from '@/hooks/useFormModal'
import React, { PropsWithChildren, createContext, useState } from 'react'

export const GlobalContext = createContext<any>(null)

const GlobalContextProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [auth, setAuth] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    
    const {
        isAuthFormShow,
        isCTAFormShow,
        setIsAuthFormShow,
        setIsCTAFormShow
    } = useFormModal()

    const value: any = {
        isLoading,
        setIsLoading,
        auth, 
        setAuth,
        errorMessage,
        setErrorMessage,
        isAuthFormShow,
        isCTAFormShow,
        setIsAuthFormShow,
        setIsCTAFormShow
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider