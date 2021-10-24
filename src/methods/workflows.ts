import { makeResource } from '../helpers/resource'
import { Entities, Entity } from '../types/entities'
import { ResourceParams } from '../types/requests'

export const ENTITY_NAME = 'workflows'

export interface WorkflowEntity extends Entity {
  id: string
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
