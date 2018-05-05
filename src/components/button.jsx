import React from 'react'
import StyledButton from './styled/button'

export default function Button ({ token, onClick }) {
  let handleClick = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    <StyledButton onClick={handleClick}> {token} </StyledButton>
  )
}
