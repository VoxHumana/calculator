import React from 'react'
import ButtonRow from './buttonRow'

export default function ButtonGrid ({ rows }) {
  return (
    <div>
      {rows.map(row => <ButtonRow symbols={row} />)}
    </div>
  )
}
