import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";
import type { TrendPoint } from "../../types/dashboard";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

interface Props {
  data: TrendPoint[];
}

export function ErrorTrendChart({ data }: Props) {
  const chartData = {
    labels: data.map((d) => d.time),
    datasets: [
      {
        label: "Error Rate (%)",
        data: data.map((d) => d.errorRate),
        borderColor: "#d32f2f",
        backgroundColor: "rgba(211,47,47,0.2)",
        tension: 0.4,
      },
      {
        label: "Response Time (ms)",
        data: data.map((d) => d.responseTime),
        borderColor: "#1976d2",
        backgroundColor: "rgba(25,118,210,0.2)",
        tension: 0.4,
      },
    ],
  };

  return <Line data={chartData} />;
}
