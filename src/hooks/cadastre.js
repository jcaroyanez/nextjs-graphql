import { useMutation, useQuery } from '@apollo/client';
import { notification } from 'antd';
import { useEffect } from 'react';
import { GET_ALL_CADASTRE, THERE_IS_PROPERTY } from '@Definitions/constant/cadastre-query';
import { CREATED_CADASTRE, DELETE_PROPERTY } from '@Definitions/constant/cadastre-mutation'
import { showErrorGraphql } from '../util/notification';

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
  const [createdCadastre] = useMutation(CREATED_CADASTRE,{
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