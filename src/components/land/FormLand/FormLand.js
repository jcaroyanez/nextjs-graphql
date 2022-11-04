import { Checkbox, Form, Radio, Button } from 'antd'
import Input from 'antd/lib/input/Input'

export const FormLand = ({ form, onFinish, initialValue }) => {
  return (
    <Form form={form} layout='vertical' onFinish={onFinish} initialValues={{...initialValue}}>
      <Form.Item
        name='area'
        label='Área'
        rules={[{ required: true }]}
      >
        <Input type='number' />
      </Form.Item>

      <Form.Item
        name='commercialValue'
        label='Valor comercial'
        rules={[{ required: true }]}
      >
        <Input type='number' />
      </Form.Item>

      <Form.Item
        label='Cerca de'
        name='hasWaterSources'
        valuePropName='checked'
      >
        <Checkbox>Fuentes de agua</Checkbox>
      </Form.Item>

      <Form.Item
        label='Tiene construcciones'
        name='hasConstructions'
        valuePropName='checked'
      >
        <Checkbox>Si</Checkbox>
      </Form.Item>

      <Form.Item
        name='typeLand'
        label='Tipo de terreno'
        rules={[{ required: true }]}
      >
        <Radio.Group>
          <Radio value='rural'> Rural </Radio>
          <Radio value='urban'> Urbano </Radio>
        </Radio.Group>
      </Form.Item>

      <Button type='primary' htmlType='submit'>Agregar</Button>
    </Form>
  )
}