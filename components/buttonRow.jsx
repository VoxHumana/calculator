import React from 'react'
import Button from './button'

export default function ButtonRow ({symbols}) {
  return (
    <div>
      {symbols.map(s => <Button symbol={s} />)}
    </div>
  )
}
