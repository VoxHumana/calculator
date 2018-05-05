import React from 'react'
import ButtonRow from './buttonRow'
import Grid from './styled/grid'

export default function ButtonGrid ({ grid, calculate }) {
  return (
    <Grid>
      {grid.map(row => <ButtonRow tokens={row} calculate={calculate} />)}
    </Grid>
  )
}
