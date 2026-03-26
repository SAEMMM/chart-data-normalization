import { Box, Container, Typography } from "@mui/material";

import { fetchDashboardData } from "./apis/dashboard";
import { useQuery } from "@tanstack/react-query";

function App() {
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
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Monitoring Dashboard
      </Typography>

      <Typography color="text.secondary" mb={4}>
        A monitoring dashboard demo with mock API integration and data
        visualization.
      </Typography>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Container>
  );
}

export default App;
