import type { DashboardData, DashboardFilter } from '../types/dashboard';

import { dashboardMockDataMap } from '../mocks/dashboardData';

export const fetchDashboardData = async (
  filters: DashboardFilter
): Promise<DashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardMockDataMap[filters.appType][filters.dateRange]);
    }, 700);
  });
};