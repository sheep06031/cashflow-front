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
} from "chart.js";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.15)",
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.3,
      },
      {
        label: `${prevMonth} Spending`,
        data: labels.map((d) => prevMonthData[d] ?? null),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.15)",
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Daily Spending Comparison: ${selectedMonth} vs ${prevMonth}`,
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `$${context.parsed.y.toLocaleString()}`, 
        },
      },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "Spending ($)" } },
      x: { title: { display: true, text: "Day of Month" } },
    },
  };

  return <Line data={data} options={options} />;
}

export default AreaChart;
