import React from 'react'
import Button from '../containers/ButtonContainer'
import StyledRow from './styled/row'

export default function ButtonRow ({tokens, calculate}) {
  return (
    <StyledRow>
      {tokens.map((t, i) => <Button key={i} token={t} calculate={calculate} />)}
    </StyledRow>
  )
}
