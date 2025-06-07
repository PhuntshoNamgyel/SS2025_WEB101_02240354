# Data Visualization Dashboard (React)

This project is an analytics dashboard built using **React** and multiple **charting libraries**. It demonstrates how to visualize data using different chart types for better insight and user experience.

## Setup Instructions

- **Clone the starter repository:**
```
https://github.com/syangche/Data-Visualisation.git
```

- **Navigate to the project directory and install dependencies:**
```bash
cd Data-Visualisation
npm install
```

## Chart Components Implemented

- **Monthly Sales Chart**
  - **Type**: Line Chart
  - **Library**: Recharts
  - **File**: `components/MonthlySalesChart.jsx`

- **Product Category Chart**
  - **Type**: Pie Chart
  - **Library**: Recharts
  - **File**: `components/ProductCategoryChart.jsx`

- **Customer Acquisition Chart**
  - **Type**: Bar Chart
  - **Library**: react-chartjs-2
  - **File**: `components/CustomerAcquisitionChart.jsx`

- **Weekly Visitors Chart**
  - **Type**: Area Chart
  - **Library**: react-chartjs-2
  - **File**: `components/WeeklyVisitorsChart.jsx`

## File Integration

- Import and use all chart components inside `App.jsx` to build a unified dashboard interface.

## Learning Outcomes

By completing this practical, you will:

- Understand how to use different chart libraries in React
- Build interactive and responsive chart components
- Load and transform data for frontend visualization
- Compare chart types (line, bar, pie, area) for different use cases
- Optimize chart performance in React apps