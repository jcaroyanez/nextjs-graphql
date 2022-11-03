import { OwnerActionsWraper } from '@Components/owner/OwnerWraperActions/OwnerActionsWraper'
import { ConstructionActionsWraper } from '@Components/contruction/ContructionActionsWraper/ConstructionActionsWraper'
import { TYPE_CONTRUCTION, TYPE_DOCUMENT, TYPE_OWNER } from '@Definitions/constant/constant'
import { PropertyActionsWraper } from '@Components/property/PropertyActionsWraper/PropertyActionsWraper'

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
      <PropertyActionsWraper data={records} />
    )
  },
]

export const COLUMNS_OWNER = [
  {
    title: 'Tipo',
    key: 'type',
    render: (_, records) => (
      <span>{TYPE_OWNER[records.type]}</span>
    )
  },
  {
    title: 'Tipo de documento',
    key: 'typeDocument',
    render: (_, records) => (
      <span>{TYPE_DOCUMENT[records.typeDocument]}</span>
    )
  },
  {
    title: 'Numero',
    dataIndex: 'document',
    key: 'typeDocument'
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Celular',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Correo electrónico',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (_, records) => (
      <OwnerActionsWraper data={records} />
    )
  }
]

export const COLUMS_CONTRUCTION = [
  {
    title: 'Número de pisos',
    dataIndex: 'numberOfFloors',
    key: 'numberOfFloors'
  },
  {
    title: 'Área total',
    dataIndex: 'totalArea',
    key: 'totalArea'
  },
  {
    title: 'Tipo',
    key: 'type',
    render: (_, records) => (
      <span>{TYPE_CONTRUCTION[records.type]}</span>
    )
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (_, records) => (
      <ConstructionActionsWraper data={records} />
    )
  }
]