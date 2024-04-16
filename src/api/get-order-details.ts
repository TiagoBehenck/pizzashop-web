import { api } from '@/lib/axios'

interface GetOrderDetailResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

interface GetOrderDetailQuery {
  orderId: string | null
}

export async function getOrderDetails({ orderId }: GetOrderDetailQuery) {
  const response = await api.get<GetOrderDetailResponse>(`/orders/${orderId}`)

  return response.data
}
