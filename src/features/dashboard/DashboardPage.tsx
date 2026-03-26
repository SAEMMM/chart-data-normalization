import { Box, Stack, Typography } from "@mui/material";

import { BaseLineChart } from "../../components/charts/BaseLineChart";
import { buildLineChartModel } from "../../adapters/buildLineChartModel";
import { metricMockMap } from "../../mocks/dashboardData";
import { normalizeErrorRate } from "../../adapters/normalizeErrorRate";
import { normalizeResponseTime } from "../../adapters/normalizeResponseTime";

export function DashboardPage() {
  const webMetrics = metricMockMap.Web;
  const androidMetrics = metricMockMap.Android;
  const iosMetrics = metricMockMap.iOS;

  const webErrorSeries = normalizeErrorRate({
    response: webMetrics.errorRate,
    id: "web-error-rate",
    label: "Web Error Rate (%)",
    color: "#1976d2",
  });

  const androidErrorSeries = normalizeErrorRate({
    response: androidMetrics.errorRate,
    id: "android-error-rate",
    label: "Android Error Rate (%)",
    color: "#ed6c02",
  });

  const iosErrorSeries = normalizeErrorRate({
    response: iosMetrics.errorRate,
    id: "ios-error-rate",
    label: "iOS Error Rate (%)",
    color: "#2e7d32",
  });

  const responseTimeSeries = normalizeResponseTime({
    response: webMetrics.responseTime,
    id: "web-response-time",
    label: "Web Response Time (ms)",
    color: "#9c27b0",
  });

  const platformComparisonModel = buildLineChartModel([
    webErrorSeries,
    androidErrorSeries,
    iosErrorSeries,
  ]);

  const webServiceModel = buildLineChartModel([
    webErrorSeries,
    responseTimeSeries,
  ]);

  return (
    <Stack spacing={6}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Platform Error Rate Comparison
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          서로 다른 플랫폼의 에러율 응답을 공통 차트 모델로 정규화한 뒤, 하나의
          라인 차트 컴포넌트로 비교합니다.
        </Typography>
        <BaseLineChart
          model={platformComparisonModel}
          yAxisTitle="Error Rate (%)"
        />
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Web Metrics Overview
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          에러율 응답과 응답시간 응답처럼 구조가 다른 데이터를 공통 모델로
          변환해 동일한 차트 컴포넌트에 연결합니다.
        </Typography>
        <BaseLineChart model={webServiceModel} yAxisTitle="Metric Value" />
      </Box>
    </Stack>
  );
}
