import { makeResource } from '../helpers/resource'
import { Entity } from '../types/entities'
import { ResourceParams } from '../types/requests'

export const ENTITY_NAME = 'workflow-executions'

export interface WorkflowExecutionsEntity extends Entity {
  id: number
  workflowId: number
  context: object
  pipeline: object[]
  errors: object[]
  status: string
  datagroup: string
  createdAt: string
  updatedAt: string
}

export const makeWorkflowExecutions = (params: ResourceParams) => {
  return makeResource(params)(ENTITY_NAME)
}

export const ENTITY_EXAMPLE = {
  id: 1,
  workflowId: 1,
  context: { url: 'https://drafter.ai' },
  pipeline: [
    { url: 'https://drafter.ai', urlTitle: 'Drafter AI powered solution' },
  ],
  errors: [],
  status: 'completed',
  datagroup: 'bee089e3-13cc-4bc4-9f3f-3a6046dddb46',
  createdAt: '2022-01-25T19:40:20.705Z',
  updatedAt: '2022-01-25T19:40:20.705Z',
}
