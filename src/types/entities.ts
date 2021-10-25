export interface Entity {
  id: string
  createdAt: string
  updatedAt: string
}

export interface Entities {
  data: Entity[]
  page: number
  offset: number
  limit: number
}
