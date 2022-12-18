import { IconButton, Badge } from '@/components/atoms/IconButton'
import { SearchInput } from '@/components/molecules/SearchInput'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import { Container, ActionBox, Content } from './styles'

import ShoppingIcon from '@/assets/icons/shopping-bag.svg'

import { useCart } from '@/hooks/useCart'

export function Header() {
  const { cart } = useCart()
  const cartSize = cart.length

  return (
    <Container>
      <Content>
        <Link href="/">
          <Image src="/capputeeno.svg" alt="Logo" width={200} height={50} />
        </Link>

        <ActionBox>
          <SearchInput
            placeholder="Procurando por algo específico?"
            onChange={(event) => event}
          />

          <Link href="/cart">
            <IconButton Icon={<ShoppingIcon />} ariaLabel="Carrinho de Compras">
              <Badge>{cartSize}</Badge>
            </IconButton>
          </Link>
        </ActionBox>
      </Content>
    </Container>
  )
}
