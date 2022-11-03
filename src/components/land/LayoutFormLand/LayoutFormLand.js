import { FormLand } from '@Components/land/FormLand/FormLand'
import { Form } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { creatorAddLand } from '../../../../state/actions/actions';
import { PreviewLand } from '@Components/land/PreviewLand/PreviewLand';

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
  const [previewLand, setPreviewState] = useState(false)

  const onFinish = (value) => {
    const newValue = {...value, 
      hasWaterSources: Boolean(value.hasWaterSources), 
      hasConstructions: Boolean(value.hasConstructions)
    }
    console.log(newValue);
    dispatch(creatorAddLand(newValue))

    form.resetFields()

    setPreviewState(true)
  }

  const onShowPreview = () => {
    setPreviewState(false)
  }

  return (
    <>
      {previewLand && land
      ? <PreviewLand land={land} onClick={onShowPreview} />
      : <FormLand form={form} onFinish={onFinish} initialValue={land || DEFAULT_VALUE_FORM} /> }
    </>
  )
}