import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.shapes.third};
  padding: 9px 16px;
  border-radius: ${({ theme }) => theme.radii.medium};

  &:hover,
  &:focus-within {
    box-shadow: ${({ theme }) => theme.shadows.ring};
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.line};
`
