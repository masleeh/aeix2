import React from 'react'
import { TButton } from './Button.types'

const Button = ({
    children,
    variant = "contained",
    size = "medium",
    color = "violet",
    onClick,
    style,
    className,
    loading
}:TButton) => {

    const classArray = ["button", `button-${variant}-${color}`, `button-${size}`, className]
    const spinnerArray = ["spinner", `spinner-${variant}-${color}`]

    return (
        <button
            className={classArray.join(" ")}
            onClick={onClick}
            style={style}
        >{children} {loading && <div className={spinnerArray.join(" ")}></div>}</button>
    )
}

export default Button