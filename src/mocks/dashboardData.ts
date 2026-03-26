import type { ErrorRateResponse, ResponseTimeResponse } from "../types/api";

import type { AppType } from "../types/dashboard";

type MetricMockMap = Record<
  Exclude<AppType, "All">,
  {
    errorRate: ErrorRateResponse;
    responseTime: ResponseTimeResponse;
  }
>;

export const metricMockMap: MetricMockMap = {
  Web: {
    errorRate: {
      metric: "errorRate",
      points: [
        { timestamp: "03/20", value: 1.2 },
        { timestamp: "03/21", value: 1.5 },
        { timestamp: "03/22", value: 1.8 },
        { timestamp: "03/23", value: 2.1 },
        { timestamp: "03/24", value: 2.0 },
        { timestamp: "03/25", value: 2.3 },
        { timestamp: "03/26", value: 2.4 },
      ],
    },
    responseTime: {
      metric: "responseTime",
      items: [
        { timeLabel: "03/20", avgMs: 320 },
        { timeLabel: "03/21", avgMs: 340 },
        { timeLabel: "03/22", avgMs: 360 },
        { timeLabel: "03/23", avgMs: 410 },
        { timeLabel: "03/24", avgMs: 430 },
        { timeLabel: "03/25", avgMs: 450 },
        { timeLabel: "03/26", avgMs: 470 },
      ],
    },
  },

  Android: {
    errorRate: {
      metric: "errorRate",
      points: [
        { timestamp: "03/20", value: 2.4 },
        { timestamp: "03/21", value: 2.7 },
        { timestamp: "03/22", value: 2.9 },
        { timestamp: "03/23", value: 3.0 },
        { timestamp: "03/24", value: 3.2 },
        { timestamp: "03/25", value: 3.3 },
        { timestamp: "03/26", value: 3.4 },
      ],
    },
    responseTime: {
      metric: "responseTime",
      items: [
        { timeLabel: "03/20", avgMs: 450 },
        { timeLabel: "03/21", avgMs: 470 },
        { timeLabel: "03/22", avgMs: 500 },
        { timeLabel: "03/23", avgMs: 520 },
        { timeLabel: "03/24", avgMs: 530 },
        { timeLabel: "03/25", avgMs: 540 },
        { timeLabel: "03/26", avgMs: 540 },
      ],
    },
  },

  iOS: {
    errorRate: {
      metric: "errorRate",
      points: [
        { timestamp: "03/20", value: 0.8 },
        { timestamp: "03/21", value: 0.9 },
        { timestamp: "03/22", value: 1.0 },
        { timestamp: "03/23", value: 1.0 },
        { timestamp: "03/24", value: 1.1 },
        { timestamp: "03/25", value: 1.1 },
        { timestamp: "03/26", value: 1.1 },
      ],
    },
    responseTime: {
      metric: "responseTime",
      items: [
        { timeLabel: "03/20", avgMs: 260 },
        { timeLabel: "03/21", avgMs: 270 },
        { timeLabel: "03/22", avgMs: 280 },
        { timeLabel: "03/23", avgMs: 290 },
        { timeLabel: "03/24", avgMs: 300 },
        { timeLabel: "03/25", avgMs: 305 },
        { timeLabel: "03/26", avgMs: 310 },
      ],
    },
  },
};
