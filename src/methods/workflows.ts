import { makeResource } from '../helpers/resource'
import { Entities, Entity } from '../types/entities'
import { ResourceParams } from '../types/requests'

export const ENTITY_NAME = 'workflows'

export interface WorkflowEntity extends Entity {
  id: number
  name: string
  status: string
  description: string
  iconUrl: string
  firstStepId: number
  createdAt: string
  updatedAt: string
  datasources: [
    {
      id: number
    }
  ]
}

export interface WorkflowEntities extends Entities {
  data: WorkflowEntity[]
}

export interface WorkflowResource {
  find: Promise<WorkflowEntities>
  get: Promise<WorkflowEntity>
  create: Promise<WorkflowEntity>
  patch: Promise<WorkflowEntity>
  update: Promise<WorkflowEntity>
  delete: Promise<WorkflowEntity>
}

export const makeWorkflows = (params: ResourceParams) => {
  return makeResource(params)(ENTITY_NAME)
}

export const ENTITY_EXAMPLE = {
  id: 1,
  name: 'Workflow #1',
  status: 'competed',
  description: 'A workflow number #1',
  iconUrl: null,
  firstStepId: 1,
  createdAt: '2022-01-25T19:40:20.705Z',
  updatedAt: '2022-01-25T19:40:20.705Z',
  steps: [],
  datasources: [
    {
      id: 1,
      type: 'csv_ds',
      url: 'file://datasource.csv',
      attributes: {
        websiteUrl: 'url',
      },
    },
  ],
}
