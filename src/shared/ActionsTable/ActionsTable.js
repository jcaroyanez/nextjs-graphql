import { DeleteFilled, EditFilled } from '@ant-design/icons'
import { Button, Tooltip, Modal } from 'antd'

export const ActionsTable = ({ title, showEdit ,onOk = () => {}, onCancel = () => {}, onEdit =() => {} }) => {

  const showModal = () => {
    Modal.confirm({
      title,
      okText: 'Si',
      cancelText: 'No',
      maskClosable: true,
      closable: true,
      onOk() {
        onOk()
      },
      onCancel(){
        onCancel()
      }
    })
  };


  return (
    <>
      {showEdit && <Tooltip placement='top' title='Editar'>
        <Button 
          style={{ marginRight: 10 }} 
          type='text' shape='circle' 
          icon={<EditFilled 
            style={{ color: '#FCE700', fontSize: 20 }} />
          }
          onClick={onEdit}
        />
      </Tooltip>}

      <Tooltip placement='top' title='Eliminar'>
        <Button 
          type='text' 
          shape='circle' 
          icon={<DeleteFilled 
            style={{ color: '#E0144C', fontSize: 20 }} />
          }
          onClick={showModal}
        />
      </Tooltip>
    </>
  )
}