import { gql } from '@apollo/client'

export const GET_PRODUCT = gql`
  query Product($ID: ID!) {
    Product(id: $ID) {
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
