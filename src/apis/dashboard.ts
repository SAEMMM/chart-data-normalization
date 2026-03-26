import type { DashboardData } from '../types/dashboard';
import { dashboardMockData } from '../mocks/dashboardData';

export const fetchDashboardData = async (): Promise<DashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardMockData);
    }, 700);
  });
};