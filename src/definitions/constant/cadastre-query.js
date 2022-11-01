import { gql } from "@apollo/client";

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