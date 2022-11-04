import { Empty, Table } from 'antd'
import { COLUMS_CONTRUCTION } from '@Definitions/constant/colums'

const locale = {
  emptyText: (
    <Empty description='No hay construciones agregadas' />
  )
}

export const TableContruction = ({ constructions }) => {
  return (
    <Table locale={locale} rowKey='id' columns={COLUMS_CONTRUCTION} dataSource={constructions} pagination={{
      defaultPageSize: 5
    }}/>
  )
}