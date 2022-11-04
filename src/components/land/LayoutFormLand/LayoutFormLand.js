import { FormLand } from '@Components/land/FormLand/FormLand'
import { Form, Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { creatorAddLand } from '../../../../state/actions/actions';
import { TableLand } from '../TableLand/TableLand';
import { Typography } from 'antd';
import classes from './LayoutFormLand.module.scss'

const { Title } = Typography;

const DEFAULT_VALUE_FORM =  {
  area: '',
  commercialValue: '',
  hasWaterSources: false,
  hasConstructions: false,
  typeLand: ''
}

export const LayoutFormLand = () => {
  const [form] = Form.useForm()
  const land = useSelector(state => state.land)
  const dispatch = useDispatch()
  const initialValue = land || DEFAULT_VALUE_FORM

  useEffect(() => {
    form.setFieldsValue(initialValue)
   }, [form, initialValue])

  const onFinish = (value) => {
    const newValue = {...value, 
      hasWaterSources: Boolean(value.hasWaterSources), 
      hasConstructions: Boolean(value.hasConstructions)
    }

    dispatch(creatorAddLand(newValue))

    form.resetFields()
  }

  return (
    <>
      <Title level={2}>Terreno</Title>
      {!land && <FormLand form={form} onFinish={onFinish} initialValue={initialValue} />}
      <div className={classes['cotent-table']}>
        <TableLand land={land ? [land] : []} />
      </div>
    </>
  )
}