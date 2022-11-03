import { Form } from 'antd'
import Input from 'antd/lib/input/Input'
import { Typography } from 'antd';

const { Title } = Typography;

export const FormProperty = ({ form, onFinish }) => {
  return (
    <>
      <Title>Predio</Title>
      <Form layout='vertical' form={form} onFinish={onFinish}>
        <Form.Item
          name='numProperty'
          label='Numero predial'
          rules={[{ required: true }]}
        >
          <Input type='number' />
        </Form.Item>

        <Form.Item
          name='appraisal'
          label='Avalúo'
          rules={[{ required: true }]}
        >
          <Input type='number' />
        </Form.Item>

        <Form.Item
          name='name'
          label='Nombre'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='department'
          label='Departamento'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='municipality'
          label='municipality'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </>
  )
}