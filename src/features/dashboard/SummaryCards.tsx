import { Box, Grid, Paper, Typography } from "@mui/material";

import type { SummaryMetric } from "../../types/dashboard";

interface Props {
  data: SummaryMetric[];
}

const getStatusColor = (status: SummaryMetric["status"]) => {
  switch (status) {
    case "normal":
      return "#2e7d32";
    case "warning":
      return "#ed6c02";
    case "critical":
      return "#d32f2f";
    default:
      return "#999";
  }
};

export function SummaryCards({ data }: Props) {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid key={item.label} size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="body2" color="text.secondary">
              {item.label}
            </Typography>

            <Typography variant="h5" fontWeight={700} mt={1}>
              {item.value}
            </Typography>

            <Box mt={1} display="flex" alignItems="center" gap={1}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: getStatusColor(item.status),
                }}
              />
              <Typography variant="caption">{item.status}</Typography>
            </Box>

            {item.changeRate !== undefined && (
              <Typography variant="caption" color="text.secondary">
                {item.changeRate > 0 ? "+" : ""}
                {item.changeRate}%
              </Typography>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
