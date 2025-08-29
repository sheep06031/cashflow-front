/** @jsxImportSource @emotion/react */
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import dayjs from "dayjs";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PieChartByCategory({ transactions, date }) {
  const selectedMonth = dayjs(date).format("YYYY-MM");

  const spendingByCategory = {};
  transactions.forEach((tx) => {
    const txMonth = dayjs(tx.transactionDt).format("YYYY-MM");
    if (txMonth === selectedMonth && tx.cost > 0) {
      const category = tx.category || "Other";
      if (!spendingByCategory[category]) spendingByCategory[category] = 0;
      spendingByCategory[category] += Math.abs(tx.cost);
    }
  });

  const generateColors = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const hue = Math.floor((360 / count) * i); // 색상 원형 분할
      return `hsl(${hue}, 70%, 60%)`;
    });
  };

  const labels = Object.keys(spendingByCategory);
  const values = Object.values(spendingByCategory);

  const data = {
    labels,
    datasets: [
      {
        label: "Spending by Category",
        data: values,
        backgroundColor: generateColors(labels.length),
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Spending by Category - ${selectedMonth}`,
      },
      tooltip: {
        enabled: true, 
        callbacks: {
          label: (context) =>
            `${context.label}: $${context.parsed.toLocaleString()}`,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default PieChartByCategory;
