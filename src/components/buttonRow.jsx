import React from 'react'
import Button from '../containers/ButtonContainer'

export default function ButtonRow ({tokens, calculate}) {
  return (
    <div>
      {tokens.map(t => <Button token={t} calculate={calculate} />)}
    </div>
  )
}
