import { EditOutlined, EditTwoTone } from '@ant-design/icons';
import { Button, Tooltip, Typography } from 'antd';
import { TYPE_LAND } from '@Definitions/constant/constant';
import classes from './PreviewLand.module.scss'

const { Title } = Typography;

export const PreviewLand = ({ land, onClick }) => {
  return (
    <>
      <div className={classes['content']}>
        <Title level={2} className={classes['content_title']}>Terreno</Title>
        <Tooltip title='Editar'>
          <Button
            type='primary'
            shape="circle"
            size="large"
            icon={<EditOutlined style={{ fontSize: 20 }} />}
            onClick={onClick}
          />
        </Tooltip>
      </div>
      <span>Área</span>
      <Title level={4}>{land?.area}</Title>

      <span>Valor comercial</span>
      <Title level={4}>{land?.commercialValue}</Title>

      <span>Cerca de fuentes de agua</span>
      <Title level={4}>{land?.hasWaterSources ? 'si' : 'no' }</Title>

      <span>Tiene construcciones</span>
      <Title level={4}>{land?.hasConstructions ? 'si' : 'no' }</Title>

      <span>Tipo de terreno</span>
      <Title level={4}>{TYPE_LAND[land?.typeLand]}</Title>
    </>
  )
}