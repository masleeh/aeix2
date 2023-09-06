import Navbar from "@/components/Common/Navbar/Navbar"
import SuccessModal from "@/components/SuccessPage/SuccessModal/SuccessModal"
import React from "react"

const page = () => {
    return (
        <React.Fragment>
            <Navbar />
            <SuccessModal />
        </React.Fragment>
    )
}

export default page