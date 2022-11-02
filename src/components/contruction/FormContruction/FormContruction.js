import { Button, Form, Input, Select } from 'antd'
import { Typography } from 'antd';

const { Title } = Typography;
const { Option } = Select

export const FormContruction = ({ form, onFinish }) => {
  return (
    <>
      <Title level={2}>Contruciones</Title>

      <Form layout='vertical' form={form} onFinish={onFinish}>
        <Form.Item
          name='numberOfFloors'
          label='Número de pisos'
          rules={[{ required: true }]}
        >
          <Input type='number' />
        </Form.Item>

        <Form.Item
          name='totalArea'
          label='Área total'
          rules={[{ required: true }]}
        >
          <Input type='number' />
        </Form.Item>

        <Form.Item
          name='type'
          label='Tipo'
          rules={[{ required: true }]}
        >
          <Select placeholder='Seleccione'>
            <Option value='industrial'>Industrial</Option>
            <Option value='commercial'>Comercial</Option>
            <Option value='residential'>Residencial</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name='address'
          label='Dirección'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Button type='primary' htmlType='submit'>Agregar</Button>
      </Form>
    </>
  )
}