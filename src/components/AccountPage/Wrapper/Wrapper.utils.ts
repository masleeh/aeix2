import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Cookie from 'js-cookie'


const useWrapper = (auth: string) => {
    const router = useRouter()

    const [userData, setUserData] = useState({
        user_name: "",
        paid_till: "",
        phone: auth,
        role_id: 1,
        status: "Active"
    })

    const formattedNumber = (rawPhone: string) => {
        const x = Number(rawPhone.length - 12)
        let number = rawPhone.substring(x).replace(/(\D+)/g, '')
        let first = '', second = '', third = '', fourth = ''
        first = number.substring(0, 1)
        second = number.substring(1, 4)
        third = number.substring(4, 7)
        fourth = number.substring(7, 11)
        number = "+" + first + " " + second + ' ' + third + " " + fourth

        return number
    }

    const formattedDate = (rawDate: string) => {
        const date = new Date(Date.parse(rawDate.replace(" ", "T")))
        const outputDate = date.toLocaleDateString('en-Us', {month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric',
                    minute: 'numeric'}).replace(',', "")
        return outputDate
    }

    const getStatus = (rawDate: string) => {
        const date = new Date(Date.parse(rawDate.replace(" ", "T")))
        const timestamp = date.getTime()
        if (timestamp > Date.now()) {
            return "Active"
        } else {
            return "Expired"
        }
    }

    const getUserData = async () => {
        try {
            const trimmedAuth = auth.replace(/(\D+)/g, '')
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_user_data/${trimmedAuth}`)
            setUserData({
                user_name: response.data.user_name,
                paid_till: formattedDate(response.data.paid_till),
                phone: formattedNumber(userData.phone),
                role_id: response.data.role_id,
                status: getStatus(response.data.paid_till)
            })
        } catch (error: any) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if (auth) {
            getUserData()
        } else{
            // router.push("/")
        }
    }, [])

    return {
        userData,
        getUserData
    }
}

export default useWrapper