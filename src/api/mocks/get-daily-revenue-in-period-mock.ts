import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-revenue-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 1000 },
    { date: '02/01/2024', receipt: 800 },
    { date: '03/01/2024', receipt: 1100 },
    { date: '04/01/2024', receipt: 876 },
    { date: '05/01/2024', receipt: 421 },
    { date: '06/01/2024', receipt: 1231 },
    { date: '07/01/2024', receipt: 974 },
    { date: '08/01/2024', receipt: 641 },
    { date: '09/01/2024', receipt: 412 },
  ])
})
