import React from 'react'
import { TButton } from './Button.types'

const Button = ({
    children,
    variant = "contained",
    size = "medium",
    color = "violet",
    onClick,
    style
}:TButton) => {

    const classArray = ["button", `${variant}-${color}`, size]

    return (
        <button
            className={classArray.join(" button-")}
            onClick={onClick}
            style={style}
        >{children}</button>
    )
}

export default Button