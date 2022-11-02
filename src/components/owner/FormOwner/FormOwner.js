import { Button, Form, Select } from 'antd'
import Input from 'antd/lib/input/Input'
import { createRef } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const typeWoner = {
  individuals: 'individuals',
  legalEntities: 'legalEntities'
}

const validateTypeIsindividuals = (value) => {
  if (!value || value !== typeWoner.individuals) {
    return false
  }

  return true
}

const defaultLabelName = (value) => {
  if(!value) {
    return 'Nombre y apellidos'
  }

  if(value === typeWoner.individuals) {
    return 'Nombre y apellidos'
  }

  return 'razón social'
} 

export const FormOwner = ({ form, onFinish }) => {
  const formRef = createRef()

  const onChangeType = (value) => {
    if (value === typeWoner.legalEntities) {
      formRef.current.setFieldsValue({
        typeDocument: 'Nit'
      })
    } else {
      formRef.current.setFieldsValue({
        typeDocument: ''
      })
    }
  }

  return (
    <>
      <Title level={2}>Propietarios</Title>
      <Form layout='vertical' ref={formRef} form={form} onFinish={onFinish}>
        <Form.Item
          name='type'
          label='Tipo'
          rules={[{ required: true }]}
        >
          <Select placeholder='Seleccione' onChange={onChangeType}>
            <Option value={typeWoner.individuals}>Personas naturales</Option>
            <Option value={typeWoner.legalEntities}>Personas jurídicas</Option>
          </Select>
        </Form.Item>


        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}>
          {({ getFieldValue }) => {
            return (
              <Form.Item
                name='typeDocument'
                label='Tipo de documento'
                rules={[{ required: true }]}
              >
                {validateTypeIsindividuals(getFieldValue('type'))
                  ?
                    <Select
                      placeholder='Seleccione'
                    >
                      <Option value='cc'>
                        Cédula de ciudadanía
                      </Option>
                      <Option value='passport'>Pasaporte</Option>
                    </Select>
                  : <Input disabled readOnly/>
                }

              </Form.Item>
            )
          }
          }
        </Form.Item>

        <Form.Item
          name='document'
          label='Numero'
          rules={[{ required: true }]}
        >
          <Input type='number' />
        </Form.Item>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}>
          {({ getFieldValue }) => {
            return (
              <Form.Item
                name='name'
                label={defaultLabelName(getFieldValue('type'))}
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            )
          }
          }
        </Form.Item>

        <Form.Item
          name='address'
          label='Dirección'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='phone'
          label='Teléfono'
          rules={[{ required: true }]}
        >
          <Input type='number' />
        </Form.Item>

        <Form.Item
          name='email'
          label='Correo electrónico'
          rules={[{ required: true }]}
        >
          <Input type='email' />
        </Form.Item>

        <Button type='primary' htmlType='submit'>Agregar</Button>
      </Form >
    </>
  )
}