import React from 'react'
import ButtonRow from './buttonRow'
import Grid from './styled/grid'

export default function ButtonGrid ({ grid, calculate }) {
  return (
    <Grid>
      {grid.map((row, i) => <ButtonRow key={i} tokens={row} calculate={calculate} />)}
    </Grid>
  )
}
