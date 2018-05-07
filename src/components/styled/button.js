import styled from 'styled-components'

const RipplingButton = styled.button`
  background-position: center;
  transition: background 0.8s;
  &:hover {
    background: #008080d6 radial-gradient(circle, transparent 1%, #008080d6 1%) center/15000%;
  }
  &:active {
    background-color: #13b9b9;
    background-size: 100%;
    transition: background 0s;
  }
`
const StyledButton = RipplingButton.extend`
  background-color: teal;
  border-style: none;
  color: white;
  margin: 2px;
  height: 50px;
  width: 50px;
  font-size: 20px;
  font-family: 'Calibri';
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 2px 2px 4px #111;
`

export default StyledButton
