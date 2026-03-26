import type { DashboardData } from '../types/dashboard';

export const dashboardMockData: DashboardData = {
  filters: {
    appType: 'Web',
    dateRange: 'Last 7 days',
  },
  summary: [
    {
      label: 'Error Rate',
      value: '2.3%',
      status: 'warning',
      changeRate: 0.4,
    },
    {
      label: 'Avg Response Time',
      value: '450ms',
      status: 'warning',
      changeRate: 12,
    },
    {
      label: 'Active Users',
      value: '12,480',
      status: 'normal',
      changeRate: 8.1,
    },
    {
      label: 'Crash Count',
      value: '18',
      status: 'critical',
      changeRate: 3.2,
    },
  ],
  trend: [
    { time: '03/20', errorRate: 1.2, responseTime: 320 },
    { time: '03/21', errorRate: 1.5, responseTime: 340 },
    { time: '03/22', errorRate: 1.8, responseTime: 360 },
    { time: '03/23', errorRate: 2.1, responseTime: 410 },
    { time: '03/24', errorRate: 2.0, responseTime: 430 },
    { time: '03/25', errorRate: 2.3, responseTime: 450 },
    { time: '03/26', errorRate: 2.4, responseTime: 470 },
  ],
};