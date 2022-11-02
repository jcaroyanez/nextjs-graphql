import { ActionsTable } from '@Shared/ActionsTable/ActionsTable'
import { useDispatch } from 'react-redux';
import { creatorDeleteOwner } from '../../../../state/actions/actions';

export const OwnerActionsWraper = ({ data }) => {
  const dispath = useDispatch()

  const onOk = () => {
    dispath(creatorDeleteOwner(data.document))
  }

  return (
    <ActionsTable title={`Esta seguro desea eliminar a ${data.name}`} onOk={onOk} />
  )
}