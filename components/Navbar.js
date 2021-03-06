import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { Link } from '../routes'

import Layout from './Layout'
import Box from './Box'
import StyledLink from './Link'
import { Logo } from './Icons'

const Container = styled(Box)`
  height: 3.5rem;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px -2px 18px 0px rgba(72, 89, 102, 0.25);
`

const ContainItems = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 150px;
  font-weight: 500;
  color: #8a94a6;
  transition: all 0.15s ease 0s;
  ${({ active }) => active && `
    border-bottom: 2px solid #0c66ff;
    cursor: pointer;
    font-weight: 700;
    color: black;
  `}
  &:hover {
    border-bottom: 2px solid #0c66ff;
    cursor: pointer;
    font-weight: 700;
    color: black;
  }
`

const StyledLogo = styled(Logo)`
  &:hover {
    cursor: pointer;
  }
`

export default class Navbar extends PureComponent {
  render() {
    const { activeIndex } = this.props
    const items = ['Proposals', 'Projects'].map((text, idx) => (
      <Link key={idx} route={`/${text.toLowerCase()}`}>
        <Item width="150px" active={activeIndex === idx}>
          <StyledLink>{text}</StyledLink>
        </Item>
      </Link>
    ))
    return (
      <Container>
        <ContainItems>
          <Box pl={4} display="flex">
            <Link route="/"><StyledLogo /></Link>
          </Box>
          <Box display="flex">{items}</Box>
        </ContainItems>
      </Container>
    )
  }
}
