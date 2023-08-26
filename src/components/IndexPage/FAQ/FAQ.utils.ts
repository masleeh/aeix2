import { useState } from "react"

export const useFAQ = () => {
    const [showDesc, setShowDesc] = useState(false)

    const handleBoxClick = () => setShowDesc(!showDesc)

    return {
        showDesc,
        handleBoxClick
    }
}