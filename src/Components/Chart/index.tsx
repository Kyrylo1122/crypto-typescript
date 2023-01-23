import React from "react";
import moment from "moment";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface IProp {
  name: string;
  time: number;
  price: number[][];
}

const Chart: React.FC<IProp> = ({ price, name, time }) => {
  const coinChartData = price.map((price) => ({
    time: price[0],
    price: price[1],
  }));
  const data = {
    labels: coinChartData.map((value) => {
      if (time === 1) {
        return moment(value.time).format(" HH[h] mm[min]");
      }
      if (time > 1 && time <= 7) {
        return moment(value.time).format("MMM Do HH[h]");
      }
      if (time > 7 && time <= 90) {
        return moment(value.time).format("MMM Do ");
      }
      if (time > 90) {
        return moment(value.time).format("MMM Do YY");
      }
    }),
    datasets: [
      {
        fill: true,
        label: name,
        data: coinChartData.map((value) => value.price),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${name} price history  for ${time} ${
          time === 1 ? "day" : "days"
        }`,
      },
    },
  };

  return <Line options={options} data={data} />;
};
export default Chart;
