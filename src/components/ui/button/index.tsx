import React from 'react'
import './style.scss'

export const MyButton = ({children, className, onClick}: {children: React.ReactNode, className?: string, onClick?: () => void}) => {
  return (
    <button onClick={onClick} className={`my-button ${className}`}>{children}</button>
  )
}
