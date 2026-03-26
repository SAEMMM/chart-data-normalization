export type ServiceStatus = 'normal' | 'warning' | 'critical';

export interface SummaryMetric {
  label: string;
  value: string;
  status: ServiceStatus;
  changeRate?: number;
}

export interface TrendPoint {
  time: string;
  errorRate: number;
  responseTime: number;
}

export interface DashboardFilter {
  appType: string;
  dateRange: string;
}

export interface DashboardData {
  summary: SummaryMetric[];
  trend: TrendPoint[];
  filters: DashboardFilter;
}