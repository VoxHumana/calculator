import React from 'react'
import StyledButton from './styled/button'
import StyledToken from './styled/token'

export default function Button ({ token, onClick }) {
  let handleClick = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    <StyledButton onClick={handleClick}>
      <StyledToken>{token}</StyledToken>
    </StyledButton>
  )
}
