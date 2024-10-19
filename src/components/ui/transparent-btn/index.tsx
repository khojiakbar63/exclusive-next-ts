import React from 'react'
import './style.scss'

export const TransButton = ({children, className, onClick}: {children: React.ReactNode, className?: string, onClick?: () => void}) => {
  return (
    <button onClick={onClick} className={`trans-button ${className}`}>{children}</button>
  )
}
 