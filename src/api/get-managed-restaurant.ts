import { api } from '@/lib/axios'

export interface GetManagedRestaurantResponse {
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  description: string | null
  managerId: string | null
}
export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse | undefined>(
    '/managed-restaurant',
  )

  return response.data
}
