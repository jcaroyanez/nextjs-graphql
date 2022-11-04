import { Table, Empty, Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { COLUMNS_CADASTRE } from '@Definitions/constant/colums';
import { useGetAllCadastre } from '@Hooks/cadastre'
import Link from 'next/link'
import classes from './List.module.scss'

const { Title } = Typography

const locale = {
  emptyText: (
    <Empty description='No hay catastros registrados' />
  )
}

const List = () => {
  const { loading, data } = useGetAllCadastre()

  return (
    <>
      <div className={classes['content-navigation']}>
        <Title>Predios</Title>
        <Link href='/catastro/crear' passHref>
          <Button type='primary' shape='round' icon={<PlusOutlined />}>
            Registrar catastro
          </Button>
        </Link>
      </div>
      <Table
        locale={locale} 
        columns={COLUMNS_CADASTRE}
        rowKey='numProperty' 
        dataSource={data?.allProperties} 
        bordered
        pagination={{
          defaultPageSize: 5
        }}
      />
    </>
  )
}

export default List