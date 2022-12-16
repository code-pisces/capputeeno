import { gql } from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
  query AllProduct {
    allProducts {
      name
      description
      image_url
      category
      id
      price_in_cents
      sales
      created_at
    }
  }
`
