import { Table } from 'antd'
import { COLUMS_LAND } from '@Definitions/constant/colums'

export const TableLand = ({land}) => {
  return (
    <Table rowKey='area' columns={COLUMS_LAND} dataSource={land} pagination={false} />
  )
}