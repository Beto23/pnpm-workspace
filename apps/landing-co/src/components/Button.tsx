import React from 'react'

export function Button({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  const handleClick = () => {
    console.log('clic', onClick)

  }
  return <button onClick={handleClick}>{children}</button>
}
export default Button
