import { FetchParams } from '../types/requests'

export const makeRequest = async ({
  fetch,
  url,
  method,
  headers,
  body,
}: FetchParams) => {
  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  })

  try {
    const json = await response.json()
    return json
  } catch (ex) {
    throw ex
  }
}
