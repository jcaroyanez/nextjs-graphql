import { ActionsTable } from '@Shared/ActionsTable/ActionsTable'
import { useDeleteProperty } from '@Hooks/cadastre'
import { notification } from 'antd'

export const PropertyActionsWraper = ({ data }) => {
  const deleteProperty = useDeleteProperty()

  const onOk = () => {
    deleteProperty({
      variables: { id: parseInt(data.id) }
    })
    notification['success']({
      message: 'Propiedad eliminada'
    })
  }

  return (
    <ActionsTable title={`Esta seguro desea eliminar esta construcción`} onOk={onOk} />
  )
}