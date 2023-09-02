import React from 'react'
import { TModalInput } from './ModalInput.types'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const ModalInput = ({
    title,
    value,
    handleChangeValue,
    placeholder,
    type,
    onKeyEnter
}:TModalInput) => {

    switch (type) {
        case "phone":
            return (
                <div className='cta-input-wrapper'>
                    <h5 className="cta-input-title">{title}</h5>
                    <PhoneInput 
                        countries={["US", "CA", "GE"]}
                        value={value} 
                        onChange={(event) => handleChangeValue(event)}
                        defaultCountry={"US"}
                        className="cta-input"
                        limitMaxLength
                        placeholder={placeholder}
                        onKeyDown={onKeyEnter}
                    />
                </div>
            )
        default:
            return (
                <div className='cta-input-wrapper'>
                    <h5 className="cta-input-title">{title}</h5>
                    <input className='cta-input' type="text" placeholder={placeholder} value={value} onChange={handleChangeValue}/>
                </div>
            )
    }
}

export default ModalInput