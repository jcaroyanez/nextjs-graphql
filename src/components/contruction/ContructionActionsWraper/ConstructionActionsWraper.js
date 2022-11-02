import { ActionsTable } from '@Shared/ActionsTable/ActionsTable'
import { useDispatch } from 'react-redux'
import { creatorDeleteContruction } from '../../../../state/actions/actions'

export const ConstructionActionsWraper = ({ data }) => {
  const dispath = useDispatch()

  const onOk = () => {
    dispath(creatorDeleteContruction(data.id))
  }

  return (
    <ActionsTable title={`Esta seguro desea eliminar esta construcción`} onOk={onOk} />
  )
}