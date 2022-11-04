import { gql } from '@apollo/client';

export const CREATED_CADASTRE = gql`
  mutation Mutation($property: PropertyInput!, $owners: [OwnerInput]!, 
    $constructions: [ConstructionInput]!, $land: LandInput) {
    createdProperty(property: $property, owners: $owners, 
    constructions: $constructions, land: $land) {
      id
      numProperty
      appraisal
      name
      department
      municipality
    }
  }
`

export const DELETE_PROPERTY = gql`
  mutation Mutation($id: Int!) {
    deleteProperty(id: $id) {
      id
      numProperty
      appraisal
      name
      department
      municipality
    }
  }
`

export const UPDATE_PROPERTY = gql`
mutation Mutation($property: PropertyInput!, $owners: [OwnerInput]!, 
  $constructions: [ConstructionInput]!, $land: LandInput) {
  updateProperty(property: $property, owners: $owners, 
  constructions: $constructions, land: $land) {
    id
    numProperty
    appraisal
    name
    department
    municipality
  }
}
`