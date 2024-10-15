import React from 'react'
import './style.scss'

export const MyButton = ({children, className, onClick}: {children: string, className?: string, onClick?: () => void}) => {
  return (
    <button onClick={onClick} className={`my-button ${className}`}>{children}</button>
  )
}
