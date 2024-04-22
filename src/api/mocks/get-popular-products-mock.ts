import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { amount: 100, product: 'Margherita' },
    { amount: 200, product: 'Calabresa' },
    { amount: 300, product: 'Peperoni' },
    { amount: 400, product: 'Mel deus' },
    { amount: 500, product: '4 queijos' },
  ])
})
