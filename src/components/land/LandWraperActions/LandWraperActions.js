import { ActionsTable } from '@Shared/ActionsTable/ActionsTable'
import { useDispatch } from 'react-redux';
import { creatorDeleteLand } from '../../../../state/actions/actions';

export const LandWraperActions = () => {
  const dispatch = useDispatch()

  const onOk = () => {
    dispatch(creatorDeleteLand())
  }

  return (
    <ActionsTable onOk={onOk} title='Desea elimina este terreno' />
  )
}