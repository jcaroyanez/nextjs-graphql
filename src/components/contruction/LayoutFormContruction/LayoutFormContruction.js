import { useDispatch, useSelector } from 'react-redux'
import { creatorAddContrunction } from '../../../../state/actions/actions'
import { FormContruction } from '@Components/contruction/FormContruction/FormContruction'
import { v1 as uuid } from 'uuid';
import { Form } from 'antd';
import { TableContruction } from '@Components/contruction/TableContruction/TableContruction';
import classes from './LayoutFormContruction.module.scss'

export const LayoutFormContruction = () => {
  const constructions = useSelector(state => state.constructions)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onFinish = (value) => {
    const newValue = {...value, id: uuid()}
    dispatch(creatorAddContrunction(newValue))
    form.resetFields()
  }

  return (
    <>
      <FormContruction form={form} onFinish={onFinish} />
      <div className={classes['content-table']}>
        <TableContruction constructions={constructions} />
      </div>
    </>
  )
}