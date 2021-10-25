import { makeWorkflows, makeWorkflowExecutions, makeUsers } from './methods'
import { Params } from './types/requests'

export interface Methods {
  users: object
  workflows: object
  workflowExecutions: object
}

export const initialize = (
  apikey: string,
  organization: string,
  params: Params
): Methods => {
  const newParams = {
    fetch: () => {
      throw new Error('Fetch function is not provided')
    },
    url: 'https://api.drafter.ai',
    ...params,
    headers: {
      ...params.headers,
      'Content-Type': 'application/json',
      'X-Access-Key': apikey,
      'X-Organization': `https://${organization}`,
    },
  }

  return {
    users: makeUsers(newParams),
    workflows: makeWorkflows(newParams),
    workflowExecutions: makeWorkflowExecutions(newParams),
  }
}
