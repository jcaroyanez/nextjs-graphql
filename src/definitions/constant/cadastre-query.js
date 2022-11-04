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

export const FIND_PROPERTY = gql`
  query FindProperty($id: Int!) {
    findProperty(id: $id) {
      property {
        id
        numProperty
        appraisal
        name
        department
        municipality
      }
      owners {
        id
        type
        typeDocument
        document
        name
        address
        phone
        email
      }
      constructions {
        id
        numberOfFloors
        totalArea
        type
        address
      }
      land {
        id
        area
        commercialValue
        hasWaterSources
        typeLand
        hasConstructions
      }
    }
  }
`

export const THERE_IS_PROPERTY_UPDATE = gql`
  query Query($id: Int!, $numProperty: String!) {
    thereIsPropertyUpdate(id: $id, numProperty: $numProperty)
  }
`