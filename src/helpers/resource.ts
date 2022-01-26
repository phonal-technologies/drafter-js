import { ResourceParams } from '../types/requests'

import { makeRequest } from './request'

export const makeResource = ({ fetch, url, headers }: ResourceParams) => (
  name: string
) => {
  return {
    find(query: object = {}, { all = false } = {}) {
      const _url = new URL(`${url}/${name}`)

      Object.entries(query).forEach(([key, value]) =>
        _url.searchParams.append(key, value)
      )

      if (all) {
        headers = { ...headers, 'x-no-paginate': all }
      }

      return makeRequest({
        fetch,
        headers,
        method: 'GET',
        url: _url.toString(),
      })
    },

    create(data: object) {
      const _url = new URL(`${url}/${name}`)

      return makeRequest({
        fetch,
        headers,
        method: 'POST',
        url: _url.toString(),
        body: data,
      })
    },

    get(id: string) {
      const _url = new URL(`${url}/${name}/${id}`)

      return makeRequest({
        fetch,
        headers,
        method: 'GET',
        url: _url.toString(),
      })
    },

    patch(id: string, data: object) {
      const _url = new URL(`${url}/${name}/${id}`)

      return makeRequest({
        fetch,
        headers,
        method: 'PATCH',
        url: _url.toString(),
        body: data,
      })
    },

    update(id: string, data: object) {
      const _url = new URL(`${url}/${name}/${id}`)

      return makeRequest({
        fetch,
        headers,
        method: 'PUT',
        url: _url.toString(),
        body: data,
      })
    },

    delete(id: string) {
      const _url = new URL(`${url}/${name}/${id}`)

      return makeRequest({
        fetch,
        headers,
        method: 'DELETE',
        url: _url.toString(),
      })
    },
  }
}
