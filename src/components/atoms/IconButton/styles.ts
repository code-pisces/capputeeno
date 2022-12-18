import styled from 'styled-components'

export const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.small};
  background-color: #fff;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.background};
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.shapes.secondary};
  }

  &:focus-within {
    box-shadow: ${({ theme }) => theme.shadows.ring};
  }
`

export const BadgeRoot = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
  height: 17px;
  min-width: 17px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.delete.main};
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`
