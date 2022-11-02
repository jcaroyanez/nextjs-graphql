import { Form, notification } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { FormOwner } from '@Components/owner/FormOwner/FormOwner'
import { TableOwner } from '@Components/owner/TableOwner/TableOwner'
import { creatorAddOwner } from '../../../../state/actions/actions'
import classes from './LayoutFormOwner.module.scss'

export const LayoutFormOwner = () => {
  const owners = useSelector(state => state.owners)
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  console.log({owners});

  const findOwner = (document) => {
    return owners.find(owner => owner.document === document)
  }

  const onFinish = (value) => {
    console.log(value)
    if(owners.length && findOwner(value.document)) {
      notification['error']({
        message: 'Este usuario ya esta agregado',
        placement: 'top'
      })
    } else {
      dispatch(creatorAddOwner(value))
      form.resetFields()
    }
  }

  return (
    <>
      <FormOwner form={form} onFinish={onFinish} />
      <div className={classes['content-table']}>
        <TableOwner owners={owners} />
      </div>
    </>
  )
}