import { api } from '@/lib/axios'

type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-revenue-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
