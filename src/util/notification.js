import { notification } from  'antd'

export const showErrorGraphql = (error) => {
  notification['error']({
    message: 'Ha ocurrido un error',
    description: error.graphQLErrors[0].message
  })
}