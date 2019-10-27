import React from "react";
import { Line } from "react-chartjs-2";
import { Section, SecondaryHeading } from "../../styles";

export default function CardPerformance({ data }) {
  const chartData = {
    labels: [200, 300, 400],
    datasets: [
      {
        label: [100, 200, 300, 400, 500],
        backgroundColor: "transparent",
        pointBackgroundColor: "#ddd",
        lineTension: 0.1,
        borderColor: "rgba(75,192,192,1)",

        data: [2, 2.9, 2.8, 2.7, 2.6, 2.5, 3, 3.2, 1.3, 1.2, 1, 1, 0.3, 0.1]
      },
      {
        label: [100, 200, 300, 400, 500],
        backgroundColor: "transparent",
        pointBackgroundColor: "#ddd",
        lineTension: 0.1,
        borderColor: "rgba(33, 65,192,1)",

        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    ]
  };

  const lineOptions = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: true,
            weight: 200
          },
          ticks: {
            fontColor: "#3a384c"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
            weight: 200
          },
          ticks: {
            fontColor: "#3a384c",
            max: 3.5,
            min: 0,
            stepSize: 0.5
          }
        }
      ]
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  };
  return (
    <Section>
      <SecondaryHeading>Performance</SecondaryHeading>
      <div>
        <Line data={chartData} options={lineOptions} height={250} width={250} />
      </div>
    </Section>
  );
}
