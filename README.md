# drafterai-js

[![npm (scoped)](https://img.shields.io/npm/v/@phonal-technologies/drafterai-js)](https://www.npmjs.com/package/@phonal-technologies/drafterai-js)
[![npm](https://img.shields.io/npm/dy/@phonal-technologies/drafterai-js)](https://www.npmjs.com/package/@phonal-technologies/drafterai-js)
[![license](https://img.shields.io/github/license/phonal-technologies/drafter-js)](https://www.npmjs.com/package/@phonal-technologies/drafterai-js)

Javascript SDK for Drafter AI

```js
// example.js
import fetch from 'node-fetch'
import {
  initialize,
  WORKFLOW_EXAMPLE,
  WORKFLOW_EXECUTION_EXAMPLE,
} from '@phonal-technologies/drafterai-js'

// Init an API with apikey and fetch provider
const accessKey = process.env.DRAFTER_ACCESS_KEY
const drafterApi = initialize(accessKey, {
  fetch,
  url: 'http://localhost:3030',
})

/**
 * Example
 * const drafterApi = initialize(
 * 'pro_Vs1zz0Le.fX1F5KlLvqeZzzzeLhot6lXEE',
 * { fetch: fetch, }
 * )
 */

;(async () => {
  console.log('WORKFLOW_EXAMPLE', WORKFLOW_EXAMPLE)
  console.log('WORKFLOW_EXECUTION_EXAMPLE', WORKFLOW_EXECUTION_EXAMPLE)

  const workflows = await drafterApi.workflows.find(
    { $limit: 10, '$sort[id]': -1 },
    { all: true }
  )

  const workflowExecutions = await drafterApi.workflowExecutions.find(
    { $limit: 10, '$sort[id]': -1 },
    { all: true }
  )

  console.log('First 10 workflows', workflows)
  console.log('First 10 workflowExecutions', workflowExecutions)

  const [queuedExecution] = await drafterApi.workflowExecutions.create({
    workflowId: 88,
    context: {
      url: 'https://drafter.ai',
    },
  })

  console.log('queuedExecution', queuedExecution)

  const intervalId = setInterval(async () => {
    const [execution] = await drafterApi.workflowExecutions.find(
      { $limit: 10, '$sort[id]': -1, datagroup: queuedExecution.datagroup },
      { all: true }
    )

    if (['completed', 'failed'].includes(execution.status)) {
      clearInterval(intervalId)
    }

    console.log('execution', execution)
  }, 3000)
})()
```
