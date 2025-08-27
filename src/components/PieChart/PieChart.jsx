/** @jsxImportSource @emotion/react */
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import dayjs from "dayjs";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PieChart({ transactions, date }) {
  const selectedMonth = dayjs(date).format("YYYY-MM");

  const spendingByType = {};
  transactions.forEach((tx) => {
    const txMonth = dayjs(tx.transactionDt).format("YYYY-MM");
    if (txMonth === selectedMonth && tx.cost > 0) {
      const type = tx.spendingType || "Other";
      if (!spendingByType[type]) spendingByType[type] = 0;
      spendingByType[type] += Math.abs(tx.cost);
    }
  });

  const labels = Object.keys(spendingByType);
  const values = Object.values(spendingByType);

  const data = {
    labels,
    datasets: [
      {
        label: "Spending by Type",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: `Spending by Type - ${selectedMonth}`,
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.label}: ₩${context.parsed.toLocaleString()}`,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default PieChart;
