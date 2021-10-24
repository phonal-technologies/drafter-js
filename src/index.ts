import { makeWorkflows, makeWorkflowExecutions } from './methods'
import { Params } from './types/requests'

export interface Methods {
  workflows: object
  workflowExecutions: object
}

export const initialize = (apikey: string, params: Params): Methods => {
  const newParams = {
    fetch: () => null,
    url: 'https://api.drafter.ai',
    ...params,
    headers: {
      ...params.headers,
      'Content-Type': 'application/json',
      'X-Api-Key': apikey,
    },
  }

  return {
    workflows: makeWorkflows(newParams),
    workflowExecutions: makeWorkflowExecutions(newParams),
  }
}
