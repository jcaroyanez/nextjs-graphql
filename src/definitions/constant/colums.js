export const COLUMNS_CADASTRE = [
  {
    title: 'Numero predial',
    dataIndex: 'numProperty',
    key: 'numProperty'
  },
  {
    title: 'Avalúo',
    dataIndex: 'appraisal',
    key: 'appraisal',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Departamento',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'municipio',
    dataIndex: 'municipality',
    key: 'municipality',
  },
  {
    title: 'Actions',
    key: 'action',
    render: (_, records) => (
      <span>Actions</span>
    )
  },
]