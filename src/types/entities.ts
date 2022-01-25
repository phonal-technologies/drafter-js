export interface Entity {
  id: string | number
  createdAt: string | Date
  updatedAt: string | Date
}

export interface Entities {
  data: Entity[]
  page: number
  offset: number
  limit: number
}
