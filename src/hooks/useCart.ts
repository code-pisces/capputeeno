import { Product } from '@/@types/product'
import { useLayoutEffect, useState } from 'react'

type CartItem = Product & { quantity: number }
type UpdateQuantity = {
  product: CartItem
  quantity: number
}

export function useCart() {
  const [cart, setCart] = useState<Array<CartItem>>([])

  function parseFromLocalStorage(cart: string) {
    return JSON.parse(cart)
  }

  function loadFromLocalStorage() {
    const cartFromLocalStorage = localStorage.getItem('@RocketShoes:cart')
    if (cartFromLocalStorage) {
      setCart(parseFromLocalStorage(cartFromLocalStorage))
    } else setCart([])
  }

  function verifyIfProductExists(product: Product) {
    return cart.find((item) => item.id === product.id)
  }

  function updateQuantity({ product, quantity }: UpdateQuantity) {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity }
      }
      return item
    })
    setCart(newCart)
  }

  function addToCard(product: Product) {
    setCart([...cart, { ...product, quantity: 1 }])
  }

  function saveNew(product: CartItem) {
    if (verifyIfProductExists(product)) {
      updateQuantity({ product, quantity: product.quantity + 1 })
    } else addToCard(product)

    localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart))
  }

  useLayoutEffect(loadFromLocalStorage, [])

  return { cart, saveNew }
}
