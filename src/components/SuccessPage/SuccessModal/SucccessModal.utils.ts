import { useRouter } from "next/navigation"

const useSuccessModal = () => {
    const router = useRouter()

    const navToMain = () => {
        router.push("/")
    }

    return {
        navToMain
    }
}

export default useSuccessModal