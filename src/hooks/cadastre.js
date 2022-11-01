import { useQuery } from '@apollo/client';
import { notification } from 'antd';
import { useEffect, useMemo } from 'react';
import { GET_ALL_CADASTRE } from '@Definitions/constant/cadastre-query';
import { initializeApollo } from '../../lib/apolloClient';

export const useGetAllCadastre = () => {
  const { error, loading, data } = useQuery(GET_ALL_CADASTRE)

  useEffect(() => {
    if(error) {
      notification['error']({
        message: 'Ha ocurrido un error',
        description: error.graphQLErrors[0].message
      })
    }
  })

  return {
    loading,
    data
  }
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}