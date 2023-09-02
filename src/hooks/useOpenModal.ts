import { GlobalContext } from "@/context/GlobalContext"
import { useContext } from "react"

const useOpenModal = () => {
    const {
        setIsAuthFormShow,
        setIsCTAFormShow
    } = useContext(GlobalContext)

    const openCTAModal = () => setIsCTAFormShow(true)
    const openAuthModal = () => setIsAuthFormShow(true)

    return {
        openCTAModal,
        openAuthModal
    }
}

export default useOpenModal