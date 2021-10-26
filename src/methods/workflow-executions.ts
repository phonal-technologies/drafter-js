import { makeResource } from '../helpers/resource'
import { ResourceParams } from '../types/requests'

export const ENTITY_NAME = 'workflow-executions'

export interface WorkflowExecutionsEntity {
  id: string
}

export const makeWorkflowExecutions = (params: ResourceParams) => {
  return makeResource(params)(ENTITY_NAME)
}
