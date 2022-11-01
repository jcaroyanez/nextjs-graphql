import { Table, Empty } from 'antd';
import { COLUMNS_CADASTRE } from '@Definitions/constant/colums';
import { useGetAllCadastre } from '@Hooks/cadastre'

const locale = {
  emptyText: (
    <Empty description="No hay catastros registrados" />
  )
}

const List = () => {
  const { loading, data } = useGetAllCadastre()

  return (
    <Table 
      locale={locale} 
      columns={COLUMNS_CADASTRE}
      rowKey="numProperty" 
      dataSource={data?.allProperties} 
      bordered
    />
  )
}

export default List