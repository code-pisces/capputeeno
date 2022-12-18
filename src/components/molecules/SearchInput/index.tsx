import React, { InputHTMLAttributes } from 'react'

import { Container, Input } from './styles'

import SearchLoupe from '@/assets/icons/search-loupe.svg'

import * as AccessibleIcon from '@radix-ui/react-accessible-icon'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export function SearchInput({ ...rest }: SearchInputProps) {
  return (
    <Container>
      <Input type="search" {...rest} />
      <AccessibleIcon.Root label="Pesquisar">
        <SearchLoupe />
      </AccessibleIcon.Root>
    </Container>
  )
}
