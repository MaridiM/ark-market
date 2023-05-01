import { FC, MouseEventHandler, ReactNode } from 'react'

import './index.sass'
import classNames from 'classnames'

interface IProps {
    type?: 'submit' | 'button' | 'reset'
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
    children?: JSX.Element | JSX.Element[]
    text?: string
    social?: boolean
    attr?: any[]
}

const Button: FC<IProps> = ({ type, className, children, text, onClick, social, ...attr}) => {
    const classes = classNames(
        'btn',
        !social && 'btn-default',
        className
    )
    return (
        <button 
            type={type}
            className={classes}  
            onClick={onClick} 
            {...attr} 
        >
                {text.length ? text : children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    className: '',
    text: '',
    social: false
}

export default Button