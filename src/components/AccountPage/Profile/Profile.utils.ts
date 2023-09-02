import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

const useProfile = (auth: string, setAuth: any) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const [showModal, setShowModal] = useState(false)

    const cancelSubscription = async () => {
        setLoading(true)
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cancel_subscription`, {
                user_phone: auth
            })
            setLoading(false)
            setShowModal(true)
        } catch (error: any) {
            console.log(error.message)
            setLoading(false)
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
        router.push('/')
        setAuth("")
    }

    return {
        loading,
        cancelSubscription,
        handleCloseModal,
        showModal
    }
}

export default useProfile