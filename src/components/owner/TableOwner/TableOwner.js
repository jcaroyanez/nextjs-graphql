import { Empty, Table } from 'antd'
import { COLUMNS_OWNER } from '@Definitions/constant/colums'

const locale = {
  emptyText: (
    <Empty description='No hay propietarios agregados' />
  )
}

export const TableOwner = ({ owners }) => {
  return (
    <Table locale={locale} rowKey='document' columns={COLUMNS_OWNER} dataSource={owners} pagination={{
      defaultPageSize: 5
    }}/>
  )
}