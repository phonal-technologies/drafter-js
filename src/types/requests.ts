export interface FetchParams {
  fetch: any
  url: string
  method: string
  headers: object
  body?: object
}

export interface ResourceParams {
  fetch: any
  url: string
  headers: object
}

export interface Params {
  fetch?: any
  url?: string
  headers?: object
}
