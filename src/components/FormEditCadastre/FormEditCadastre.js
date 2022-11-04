import { Button, Form, notification } from 'antd';
import { useRouter } from 'next/router';
import { useAllDataCadastre, useThereIsPropertyUpdate, useUpdateProperty } from '@Hooks/cadastre';
import { FormProperty } from '@Components/property/FormProperty/FormProperty';
import { LayoutFormOwner } from '@Components/owner/LayoutFormOwner/LayoutFormOwner';
import { LayoutFormContruction } from '@Components/contruction/LayoutFormContruction/LayoutFormContruction';
import { LayoutFormLand } from '@Components/land/LayoutFormLand/LayoutFormLand';
import { useEffect } from 'react';
import classes from './FormEditCadastre.module.scss'
import { mapStateUpdateProperty, validForm } from '../../util/form';
import { useDispatch } from 'react-redux';
import { creatorCadastreResetState } from '../../../state/actions/actions';

export const FormEditCadastre = () => {
  const [form] = Form.useForm();
  const { query, push } = useRouter()
  const state = useAllDataCadastre(query.id)
  const refrech = useThereIsPropertyUpdate()
  const updateProperty = useUpdateProperty(query.id)
  const dispatch = useDispatch()

  useEffect(() => {
    form.setFieldsValue(state.property)
   }, [form, state.property])

  const updateForm = (value) => {
    if(validForm(state)) {
      const propertyDataMap = mapStateUpdateProperty(
        {...state, property: {...value, id: state.property.id}}
      )

      updateProperty({ variables: {
        ...propertyDataMap
      }})

      dispatch(creatorCadastreResetState())

      notification['success']({
        message: 'Catastro actualizado con exito'
      })

      push('/')
    }
  }

  const onFinish = async (value) => {
    const {data} = await refrech({
       id: parseInt(state.property.id), 
       numProperty: value.numProperty})
   
    if(data.thereIsPropertyUpdate) {
      notification['error']({
        message: 'Este numero predial ya se encuentra registrado',
      })
    } else {
      updateForm(value)
    }
  }

  const handlerSendForm = () => {
     form.submit()
  }

  return (
    <>
      <FormProperty form={form} onFinish={onFinish} initialValues={state.property} />
      <LayoutFormOwner />
      <LayoutFormContruction />
      <LayoutFormLand />
      <div className={classes['content-btn']}>
        <div className={classes['content-btn_wraper']}>
          <Button block type='primary' onClick={handlerSendForm}>Editar</Button>
        </div>
      </div>
    </>
  )
}