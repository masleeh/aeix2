"use client"

import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

const useNavBar = () => {
    const router = useRouter()
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

    return {
        goToHome,
        navTop
    }
}

export default useNavBar