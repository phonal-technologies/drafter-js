# drafter-js

Javascript SDK for Drafter AI

```js
import fetch from 'node-fetch'
import { initialize } from 'drafter-js'

// Init an API with apikey and fetch provider
const drafterApi = initialize('your-drafter-access-key', {
  fetch: fetch,
})

const main = async () => {
  const { data: workflows } = await drafterApi.workflows.find({ $limit: 50 })
  console.log('First 50 workflows', workflows)
}

main()
```
