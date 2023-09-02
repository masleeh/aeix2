import React from 'react'
import ModalWrapper from '../ModalWrapper'
import { TAuthModal } from './AuthModal.types'
import useAuthModal from './AuthModal.utils'
import ModalInput from '@/components/UI/ModalInput/ModalInput'
import Button from '@/components/UI/Button/Button'

const AuthModal = ({
    setIsAuthFormShow,
    setAuth
}:TAuthModal) => {

    const {
        phone,
        handleChangePhone,
        code,
        handleChangeCode,
        loading,
        error,
        isShowCode,
        sendNumber,
        sendCode,
        handleSendCodeOnEnter,
        handleSendNumberOnEnter
    } = useAuthModal(setIsAuthFormShow, setAuth)

    return (
        <ModalWrapper onClose={setIsAuthFormShow}>
            <div className="cta">
                <h2 className="cta-title">Hello! Sing in</h2>
                <ModalInput 
                    type="phone" 
                    title="Enter your phone number:"
                    placeholder='+1 123 456 7890'
                    value={phone}
                    handleChangeValue={handleChangePhone}
                    onKeyEnter={handleSendNumberOnEnter}
                />
                <div className="cta-check-row">
                    <Button onClick={sendNumber} variant="contained" color="white" size='large' loading={loading}>{isShowCode ? "Resend" :"Send code"}</Button>
                    <h5 className="cta-sublabel">{
                        isShowCode ? "if you did not receive the code SMS, you can request it again" :
                        "You will receive SMS verification code"
                    }</h5>
                </div>

                {error && <p className="cta-error">{error}</p>}

                {isShowCode && (
                    <React.Fragment>
                        <ModalInput
                            type="text"
                            title="Type received SMS code"
                            placeholder='123456'
                            value={code}
                            handleChangeValue={handleChangeCode}
                            onKeyEnter={handleSendCodeOnEnter}
                        />
                        <Button onClick={sendCode} variant='contained' color="white" size="large" loading={loading}>Verify</Button>
                    </React.Fragment>
                )}
            </div>
        </ModalWrapper>
    )
}

export default AuthModal