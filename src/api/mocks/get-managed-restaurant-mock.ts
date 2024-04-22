import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse | undefined
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'fake-id-rest',
    name: 'Pizza Shop',
    description: 'Pizzaria top top',
    managerId: 'fake-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
