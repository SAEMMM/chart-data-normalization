import type { AppType, DashboardFilter, DateRange } from "../types/dashboard";
import type { ErrorRateResponse, ResponseTimeResponse } from "../types/api";

import { metricMockMap } from "../mocks/dashboardData";

export interface DashboardApiResponse {
  appType: AppType;
  dateRange: DateRange;

  // 플랫폼별 raw 데이터
  metrics: {
    Web?: {
      errorRate: ErrorRateResponse;
      responseTime: ResponseTimeResponse;
    };
    Android?: {
      errorRate: ErrorRateResponse;
      responseTime: ResponseTimeResponse;
    };
    iOS?: {
      errorRate: ErrorRateResponse;
      responseTime: ResponseTimeResponse;
    };
  };
}

export const fetchDashboardData = async (
  filters: DashboardFilter,
): Promise<DashboardApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { appType, dateRange } = filters;

      // 👉 All이면 전체 플랫폼 반환
      if (appType === "All") {
        resolve({
          appType,
          dateRange,
          metrics: {
            Web: metricMockMap.Web,
            Android: metricMockMap.Android,
            iOS: metricMockMap.iOS,
          },
        });
        return;
      }

      // 👉 특정 플랫폼만 반환
      resolve({
        appType,
        dateRange,
        metrics: {
          [appType]: metricMockMap[appType],
        },
      });
    }, 700);
  });
};
