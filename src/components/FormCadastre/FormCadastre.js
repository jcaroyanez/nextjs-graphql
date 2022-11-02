import { FormProperty } from '@Components/FormProperty/FormProperty'
import { Button, Form } from 'antd';
import { FormLand } from '@Components/FormLand/FormLand';
import { LayoutFormOwner } from '@Components/owner/LayoutFormOwner/LayoutFormOwner';
import { LayoutFormContruction } from '@Components/contruction/LayoutFormContruction/LayoutFormContruction';

export const FormCadastre= () => {
  const [form] = Form.useForm();

  const handlerSubmitProperty = (values) => {
    console.log('handlerSubmitProperty', values);
  }

  return (
    <>
      {/* <FormProperty onFinish={handlerSubmitProperty} /> */}
      <LayoutFormOwner />
      <LayoutFormContruction />
      {/* <FormLand /> */}
      {/* <Button type='primary' htmlType='submit'>Registrar</Button> */}
    </>
  )
}