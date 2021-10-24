import { initialize } from '../src'

const APIKEY = '<xapikey>'

describe('workflows', () => {
  let drafterApi: any

  beforeEach(() => {
    drafterApi = initialize(APIKEY, {
      fetch: console.log,
      url: 'http://localhost:3030',
      headers: {
        'X-Custom-Key': APIKEY,
      },
    })
  })

  it('should be initialized', () => {
    expect(drafterApi).not.toEqual(null)
    expect(drafterApi.workflows).not.toEqual(null)
    expect(drafterApi.workflowExecutions).not.toEqual(null)
  })

  it('should find workflows', () => {
    expect(1).toEqual(1)
  })
})
