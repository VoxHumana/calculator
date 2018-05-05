import React from 'react'
import ButtonGrid from './components/buttonGrid'
import Screen from './components/screen'
import StyledApp from './components/styled/app'

export default function App ({ grid, calculate, display }) {
  return (
    <StyledApp>
      <Screen display={display} />
      <ButtonGrid grid={grid} calculate={calculate} />
    </StyledApp>
  )
}
