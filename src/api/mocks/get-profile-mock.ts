import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'fake-id',
      email: 'test@test.com',
      name: 'Tiago',
      phone: '99999999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
