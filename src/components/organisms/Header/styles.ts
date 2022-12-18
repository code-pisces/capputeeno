import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px 24px;
  min-height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shapes.primary};
`

export const Content = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 160px;
  }
`

export const ActionBox = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr auto;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
    grid-template-columns: minmax(352px, 1fr) auto;
  }
`
