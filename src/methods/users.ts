import { makeResource } from '../helpers/resource'
import { Entity } from '../types/entities'
import { ResourceParams } from '../types/requests'

export const ENTITY_NAME = 'users'

export interface UsersEntity extends Entity {
  organizationId: string
  avatarUrl: string
  email: string
  firstName: string
  lastName: string
  role: string
  hasEmailSub: boolean
  hasVerifiedEmail: boolean
  enabled: boolean
  acceptedTerms: boolean
  refererProvider: string
  refererProviderCode: string
  refererOwnCode: string
}

export const makeUsers = (params: ResourceParams) => {
  return makeResource(params)(ENTITY_NAME)
}
