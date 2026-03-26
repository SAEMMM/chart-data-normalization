# 📊 Chart Data Normalization Demo

서로 다른 API 응답을 공통 차트 데이터 모델로 정규화하고,
하나의 재사용 가능한 차트 컴포넌트로 렌더링하는 예제 프로젝트입니다.

---

## 🔥 핵심 문제

실무에서는 API마다 응답 구조가 다르기 때문에
차트 컴포넌트를 재사용하기 어렵습니다.

예를 들어:
```ts
// Error Rate API
{
  points: [
    { timestamp: '03/20', value: 1.2 }
  ]
}

// Response Time API
{
  items: [
    { timeLabel: '03/20', avgMs: 320 }
  ]
}
```
👉 서로 구조가 달라서 바로 차트에 넣을 수 없음

---

## ✅ 해결 방법
### 1. 공통 차트 모델 정의
```ts
interface ChartPoint {
  label: string;
  value: number;
}

interface ChartSeries {
  id: string;
  label: string;
  color: string;
  points: ChartPoint[];
}

interface LineChartModel {
  labels: string[];
  series: ChartSeries[];
}
```

### 2. Adapter 계층에서 정규화
```ts
// normalizeErrorRate.ts
export const normalizeErrorRate = (response) => ({
  id: 'error-rate',
  label: 'Error Rate (%)',
  points: response.points.map((p) => ({
    label: p.timestamp,
    value: p.value,
  })),
});
```
```ts
// normalizeResponseTime.ts
export const normalizeResponseTime = (response) => ({
  id: 'response-time',
  label: 'Response Time (ms)',
  points: response.items.map((item) => ({
    label: item.timeLabel,
    value: item.avgMs,
  })),
});
```

### 3. 공통 차트 넘포넌트
```ts
<BaseLineChart model={model} />
```
👉 이 컴포넌트는 API 응답 구조를 전혀 모름
👉 오직 LineChartModel만 받음

---

## 🧠 데이터 흐름 구조
```ts
API Response
   ↓
Adapter (normalize)
   ↓
Chart Model (공통 타입)
   ↓
Chart.js Adapter
   ↓
Reusable Chart Component
```

---

## ✨ 주요 특징
### 1. API 응답과 UI 분리
- API 구조 변경이 UI에 영향을 주지 않음

### 2. Adapter 패턴 적용
- 각 API 응답을 공통 모델로 변환
- 로직이 한 곳에 모여 유지보수 용이

### 3. 재사용 가능한 차트 컴포넌트
- 다양한 데이터 소스를 동일한 컴포넌트로 렌더링 가능

### 4. 타입 기반 설계
- `ChartModel`을 중심으로 구조를 강제
- 안정성과 생산성 향상

---

## 🖥️ 데모 시나리오
1. Error Rate 차트
- ErrorRateResponse → normalize → chart
2. Response Time 차트
- ResponseTimeResponse → normalize → chart
3. 결합 차트
- 서로 다른 API 응답을 하나의 차트로 표현

---

## 🚀 기술 스택
- React
- TypeScript
- Chart.js (react-chartjs-2)
- MUI

---

## 💡 이 프로젝트를 통해 보여주고자 한 것
- 서로 다른 API 응답을 공통 데이터 모델로 정규화하는 설계 능력
- Adapter 계층을 통한 데이터 가공 로직 분리
- 차트 라이브러리와 UI 컴포넌트 간의 결합도 감소
- 재사용 가능한 컴포넌트 설계 및 타입 기반 구조화

---

## 🧾 회고

차트를 그리는 것보다 더 중요한 것은
**데이터를 어떻게 구조화하고 전달할 것인가**라고 생각합니다.

이 프로젝트에서는

- API 응답을 그대로 사용하는 것이 아니라
- 공통 모델로 변환하는 계층을 두고
- UI는 그 모델만을 사용하도록 설계했습니다

이를 통해
- 재사용성
- 유지보수성
- 확장성
을 모두 개선할 수 있었습니다.