"use client"

import { usePathname, useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import Cookies from "js-cookie"

const useNavBar = (setAuth: any) => {
    const router = useRouter()
    const pathname = usePathname()
    const goToHome = () => router.push('/')
    const [navTop, setNavTop] = useState(0)

    const updateNavTop = useCallback(() => {
        setNavTop(window.scrollY)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', updateNavTop)
        return () => {
            window.removeEventListener('scroll', updateNavTop)
        }
    }, [])

    const goToAccount = () => {
        router.push('/account')
    }

    const logOut = () => {
        Cookies.remove('aeix_phone')
        setAuth("")
        router.push("/")
    }

    return {
        goToHome,
        navTop,
        goToAccount,
        pathname,
        logOut
    }
}

export default useNavBar