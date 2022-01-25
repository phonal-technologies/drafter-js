import fetch from 'node-fetch'
import { initialize } from '@phonal-technologies/drafterai-js'

// Init an API with apikey and fetch provider
const accessKey = process.env.DRAFTER_ACCESS_KEY
const drafterApi = initialize(accessKey, { fetch })

/**
 * Example
 * const drafterApi = initialize(
 * 'pro_Vs1zz0Le.fX1F5KlLvqeZzzzeLhot6lXEE',
 * { fetch: fetch, }
 * )
 */

const main = async () => {
  const { data: workflows } = await drafterApi.workflows.find({ $limit: 50 })
  console.log('First 50 workflows', workflows)
}

main()
