import { Header } from '@/components/organisms/Header'
import React from 'react'
import { Container, Main } from './styles'

type MainLayoutProps = {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  )
}
