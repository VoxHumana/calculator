import React from 'react'
import Button from '../containers/ButtonContainer'

export default function ButtonRow ({tokens, calculate}) {
  return (
    <div>
      {tokens.map((t, i) => <Button key={i} token={t} calculate={calculate} />)}
    </div>
  )
}
