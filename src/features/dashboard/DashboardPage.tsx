import { Box, Stack, Typography } from "@mui/material";

import { ErrorTrendChart } from "./ErrorTrendChart";
import { SummaryCards } from "./SummaryCards";
import { fetchDashboardData } from "../../apis/dashboard";
import { useQuery } from "@tanstack/react-query";

export function DashboardPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboardData,
  });

  if (isLoading) {
    return <Box p={4}>Loading dashboard...</Box>;
  }

  if (isError || !data) {
    return <Box p={4}>Failed to load dashboard data.</Box>;
  }

  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Summary
        </Typography>
        <SummaryCards data={data.summary} />
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Error & Response Trend
        </Typography>
        <ErrorTrendChart data={data.trend} />
      </Box>
    </Stack>
  );
}
