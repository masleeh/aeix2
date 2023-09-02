"use client"

import useFormModal from '@/hooks/useFormModal'
import Cookies from 'js-cookie'
import React, { PropsWithChildren, createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext<any>(null)

const GlobalContextProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [auth, setAuth] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const getCookies = () => {
        const cookie = Cookies.get('aeix_phone')
        if (cookie) {
            setAuth(cookie)
        }
        else {
            setAuth('')
        }
    }

    useEffect(() => {
        getCookies()
    }, [])
    
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