import { gql } from '@apollo/client'

export const GET_ALL_PRODUCTS_META = gql`
  query AllProduct {
    _allProductsMeta {
      count
    }
  }
`
