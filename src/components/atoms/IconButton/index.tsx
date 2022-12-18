import React from 'react'

import { Container, BadgeRoot } from './styles'

import * as AccessibleIcon from '@radix-ui/react-accessible-icon'

type WithChildren = {
  children: React.ReactNode
}

type IconButtonProps = {
  Icon: React.ReactNode
  ariaLabel: string
} & Partial<WithChildren>

function IconButton({ children, Icon, ariaLabel }: IconButtonProps) {
  return (
    <Container>
      <AccessibleIcon.Root label={ariaLabel}>{Icon}</AccessibleIcon.Root>
      {children}
    </Container>
  )
}

function Badge({ children }: WithChildren) {
  return <BadgeRoot data-testid="badge">{children}</BadgeRoot>
}

export { Badge, IconButton }
