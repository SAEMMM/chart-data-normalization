import { Container, Typography } from '@mui/material';

import { DashboardPage } from './features/dashboard/DashboardPage';

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Monitoring Dashboard
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Real-time monitoring dashboard with mock API and data visualization.
      </Typography>

      <DashboardPage />
    </Container>
  );
}

export default App;