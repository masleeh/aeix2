import React from 'react'
import { TButton } from './Button.types'

const Button = ({
    children,
    variant = "contained",
    size = "medium",
    color = "violet",
    onClick,
    style,
    className
}:TButton) => {

    const classArray = ["button", `button-${variant}-${color}`, `button-${size}`, className]

    return (
        <button
            className={classArray.join(" ")}
            onClick={onClick}
            style={style}
        >{children}</button>
    )
}

export default Button