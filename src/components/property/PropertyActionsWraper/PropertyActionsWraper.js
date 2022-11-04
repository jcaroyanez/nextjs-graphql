import { ActionsTable } from '@Shared/ActionsTable/ActionsTable'
import { useDeleteProperty } from '@Hooks/cadastre'
import { notification } from 'antd'
import { useRouter } from 'next/router'

const title = 'Esta seguro desea eliminar esta construcción'

export const PropertyActionsWraper = ({ data }) => {
  const deleteProperty = useDeleteProperty()
  const router = useRouter()

  const onOk = () => {
    deleteProperty({
      variables: { id: parseInt(data.id) }
    })
    notification['success']({
      message: 'Propiedad eliminada'
    })
  }

  const onEdit = async () => {
    router.push(`/catastro/editar/${data.id}`)
  }

  return (
    <ActionsTable showEdit title={title} onOk={onOk} onEdit={onEdit} />
  )
}