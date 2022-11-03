import { gql } from '@apollo/client';

export const GET_ALL_CADASTRE = gql`
  query AllProperties {
    allProperties {
      id
      numProperty
      appraisal
      name
      department
      municipality
    }
  }
`

export const THERE_IS_PROPERTY = gql`
  query Query($numProperty: String!) {
    thereIsProperty(numProperty: $numProperty)
  }
`