import React from 'react'
import { SupportBtn } from './style'

const Button = ({ padding = "" }) => {
    return (
        <SupportBtn padding={padding}>Support</SupportBtn>
    )
}

export default Button