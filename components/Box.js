import styled from 'styled-components'
import {
  height,
  width,
  space,
  color,
  flex,
  flexDirection,
  flexWrap,
  display,
  alignSelf,
  alignItems,
  justifyContent,
  borders,
} from 'styled-system'

export default styled.div`
  ${height}
  ${width}
  ${space}
  ${color}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${display}
  ${alignSelf}
  ${alignItems}
  ${justifyContent}
  ${borders}
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
`
