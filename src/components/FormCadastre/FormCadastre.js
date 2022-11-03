import { FormProperty } from '@Components/property/FormProperty/FormProperty'
import { Button, Form, notification } from 'antd';
import { LayoutFormOwner } from '@Components/owner/LayoutFormOwner/LayoutFormOwner';
import { LayoutFormContruction } from '@Components/contruction/LayoutFormContruction/LayoutFormContruction';
import { LayoutFormLand } from '@Components/land/LayoutFormLand/LayoutFormLand';
import classes from './FormCadastre.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { mapState, validForm } from '../../util/form';
import { creatorCadastreResetState } from '../../../state/actions/actions';
import Link from 'next/link';
import { UnorderedListOutlined } from '@ant-design/icons';
import { useCreatedProperty, useThereIsProperty } from '@Hooks/cadastre';

export const FormCadastre = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const createdCadastre = useCreatedProperty()
  const refetch = useThereIsProperty()
  const [form] = Form.useForm();
  console.log({ state });

  const onFinish = async (value) => {
    const { data } = await refetch({ numProperty: value.numProperty })
    if (data.thereIsProperty) {
      notification['error']({
        message: 'Este numero predial ya se encuentra registrado',
      })
      return
    }

    if (validForm(state)) {
      const dataForm = { property: { ...value }, ...state }

      createdCadastre({
        variables: {
          ...mapState(dataForm)
        }
      })

      form.resetFields()

      dispatch(creatorCadastreResetState())

      notification['success']({
        message: 'Catastro registrado con exito'
      })
    }
  }

  const handlerSendForm = () => {
    form.submit()
  }

  return (
    <>
      <div className={classes['content-navigation']}>
        <Link href='/' passHref>
          <Button type='primary' shape='round' icon={<UnorderedListOutlined />}>
            Listado de catrastro
          </Button>
        </Link>
      </div>
      <FormProperty form={form} onFinish={onFinish} />
      <LayoutFormOwner />
      <LayoutFormContruction />
      <LayoutFormLand />
      <div className={classes['content-btn']}>
        <div className={classes['content-btn_wraper']}>
          <Button block type='primary' onClick={handlerSendForm}>Guardar</Button>
        </div>
      </div>
    </>
  )
}