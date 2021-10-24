export interface Entity {
  id: string
}

export interface Entities {
  data: Entity[]
  page: number
  offset: number
  limit: number
}
