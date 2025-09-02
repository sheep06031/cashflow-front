/** @jsxImportSource @emotion/react */
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function AreaChart({ transactions, date }) {
  const selectedMonth = dayjs(date).format("YYYY-MM");
  const prevMonth = dayjs(date).subtract(1, "month").format("YYYY-MM");

  const groupDailySpending = (month) => {
    const daily = {};
    transactions.forEach((tx) => {
      const txMonth = dayjs(tx.transactionDt).format("YYYY-MM");
      if (txMonth === month && tx.cost > 0) {
        const day = dayjs(tx.transactionDt).format("DD");
        if (!daily[day]) daily[day] = 0;
        daily[day] += Math.abs(tx.cost);
      }
    });
    return daily;
  };

  const currentMonthData = groupDailySpending(selectedMonth);
  const prevMonthData = groupDailySpending(prevMonth);

  const daysInMonth = dayjs(date).daysInMonth();
  const labels = Array.from({ length: daysInMonth }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  const data = {
    labels,
    datasets: [
      {
        label: `${selectedMonth} Spending`,
        data: labels.map((d) => currentMonthData[d] ?? null),
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.08)",
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "#6366f1",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        fill: true,
        tension: 0.4,
      },
      {
        label: `${prevMonth} Spending`,
        data: labels.map((d) => prevMonthData[d] ?? null),
        borderColor: "#64748b",
        backgroundColor: "rgba(100, 116, 139, 0.04)",
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointBackgroundColor: "#64748b",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        fill: true,
        tension: 0.4,
        borderDash: [8, 4],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: `Daily Spending Comparison: ${selectedMonth} vs ${prevMonth}`,
        font: {
          size: 14,
          weight: '600'
        },
        color: '#1f2937',
        padding: {
          bottom: 10
        }
      },
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 5,
          font: {
            size: 12,
            weight: '500'
          },
          color: '#374151'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#f9fafb',
        bodyColor: '#f9fafb',
        borderColor: '#374151',
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: true,
        titleFont: {
          size: 14,
          weight: '600'
        },
        bodyFont: {
          size: 13
        },
        callbacks: {
          title: (context) => `Day ${context[0].label}`,
          label: (context) =>
            `${context.dataset.label}: $${context.parsed.y?.toLocaleString() || '0'}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(156, 163, 175, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#6b7280',
          font: { 
            size: 12,
            weight: '500' 
          },
          callback: (value) => `$${value.toLocaleString()}`,
          padding: 0
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
          font: { 
            size: 11,
            weight: '500' 
          },
          maxTicksLimit: 15,
        },
      },
    },
  };

  return (
    <Line data={data} options={options} />
  );
}

export default AreaChart;