import { initialize } from '../src'
import { FetchParams } from '../src/types/requests'

const APIKEY = '__DRAFTER_ACCESS_KEY__'
const XUSTOMKEY = 'xcustomkey'
const fetch = (r: object = {}) => (url: string, p: FetchParams) => {
  console.log('fetch params', url, p)
  return Promise.resolve({
    json: () => Promise.resolve(r),
  })
}

describe('workflows', () => {
  let drafterApi: any

  beforeEach(() => {
    drafterApi = null
  })

  it('should be initialized and have workflow resource', () => {
    drafterApi = initialize(APIKEY, {
      fetch: fetch(),
      url: 'http://localhost:3030',
      headers: {
        'X-Custom-Key': XUSTOMKEY,
      },
    })

    expect(drafterApi).not.toEqual(null)
    expect(drafterApi.workflowExecutions).not.toEqual(null)
    expect(drafterApi.workflows).not.toEqual(null)
    expect(drafterApi.workflows.find).not.toEqual(null)
    expect(drafterApi.workflows.get).not.toEqual(null)
    expect(drafterApi.workflows.create).not.toEqual(null)
    expect(drafterApi.workflows.update).not.toEqual(null)
    expect(drafterApi.workflows.patch).not.toEqual(null)
    expect(drafterApi.workflows.delete).not.toEqual(null)
  })

  it('should find workflows', async () => {
    const MOCKED = { data: [], offset: 0, limit: 10, total: 0 }
    drafterApi = initialize(APIKEY, {
      fetch: fetch(MOCKED),
    })

    const result = await drafterApi.workflows.find({ $limit: 50 })
    expect(result).toEqual(MOCKED)
  })

  it('should create a workflow', async () => {
    const MOCKED = { name: 'Test', description: 'Test' }
    drafterApi = initialize(APIKEY, {
      fetch: fetch(MOCKED),
    })

    const result = await drafterApi.workflows.create(MOCKED)
    expect(result).toEqual(MOCKED)
  })
})
