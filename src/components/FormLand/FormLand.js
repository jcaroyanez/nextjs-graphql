import { Checkbox, Form, Radio } from 'antd'
import Input from 'antd/lib/input/Input'
import { Typography } from 'antd';

const { Title } = Typography;


export const FormLand = () => {
  return (
    <>
      <Title level={2}>Terreno</Title>

      <Form layout='vertical'>
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
          rules={[{ required: true }]}
        >
          <Checkbox>Fuentes de agua</Checkbox>
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
      </Form>
    </>
  )
}