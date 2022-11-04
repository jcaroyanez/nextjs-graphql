import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { FIND_PROPERTY, GET_ALL_CADASTRE, THERE_IS_PROPERTY, THERE_IS_PROPERTY_UPDATE } from '@Definitions/constant/cadastre-query';
import { CREATED_CADASTRE, DELETE_PROPERTY, UPDATE_PROPERTY } from '@Definitions/constant/cadastre-mutation'
import { showErrorGraphql } from '../util/notification';
import { useDispatch, useSelector } from 'react-redux';
import { creatorCadastreUpdateAll } from '../../state/actions/actions';

export const useGetAllCadastre = () => {
  const { error, loading, data } = useQuery(GET_ALL_CADASTRE)

  useEffect(() => {
    if (error) {
      showErrorGraphql(error)
    }
  })

  return {
    loading,
    data
  }
}

export const useThereIsProperty = () => {
  const { refetch } = useQuery(THERE_IS_PROPERTY, {
    skip: true
  })
  return refetch;
}

export const useCreatedProperty = () => {
  const [createdCadastre] = useMutation(CREATED_CADASTRE, {
    onError: (error) => {
      showErrorGraphql(error)
    }
  })

  return createdCadastre;
}

export const useDeleteProperty = () => {
  const [deleteProperty] = useMutation(DELETE_PROPERTY,
    {
      onError: (error) => {
        showErrorGraphql(error)
      },
      refetchQueries: [
        {
          query: GET_ALL_CADASTRE
        }
      ]
    },
  )

  return deleteProperty
}

export const useFindProperty = () => {
  const { refetch } = useQuery(FIND_PROPERTY, {
    skip: true
  })

  return refetch
}

export const useAllDataCadastre = (id) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const [getProperty, { data }] = useLazyQuery(FIND_PROPERTY, {
    variables: {
      id: parseInt(id)
    }
  })

  useEffect(() => {
    if (id) {
      getProperty({
        variables: {
          id: parseInt(id)
        }
      })
    }
  }, [id, getProperty])

  useEffect(() => {
    if (data) {
      dispatch(creatorCadastreUpdateAll(data.findProperty))
    }
  }, [data, dispatch])

  return state
}

export const useThereIsPropertyUpdate = () => {
  const { refetch } = useQuery(THERE_IS_PROPERTY_UPDATE, {
    skip: true
  })

  return refetch
}

export const useUpdateProperty = (id) => {
  const [updateProperty] = useMutation(UPDATE_PROPERTY, {
    onError: (error) => {
      showErrorGraphql(error)
    },
    refetchQueries: [
      {
        query: GET_ALL_CADASTRE
      },
      {
        query: FIND_PROPERTY,
        variables: {
          id: parseInt(id)
        }
      }
    ]
  })

  return updateProperty;
}