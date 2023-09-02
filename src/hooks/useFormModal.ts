import {useState, useEffect} from 'react'

const useFormModal = () => {
    const [isCTAFormShow, setIsCTAFormShow] = useState(false)
    const [isAuthFormShow, setIsAuthFormShow] = useState(false)

    useEffect(() => {
        if (isCTAFormShow || isAuthFormShow) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [isCTAFormShow, isAuthFormShow])

    return {
        isAuthFormShow,
        isCTAFormShow,
        setIsAuthFormShow,
        setIsCTAFormShow
    }
}

export default useFormModal