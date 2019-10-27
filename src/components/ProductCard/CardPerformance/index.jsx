import React from "react";
import { Line } from "react-chartjs-2";
import { Section, SecondaryHeading } from "../../styles";

export default function CardPerformance({
  performanceFirst,
  performanceSecond
}) {
  const chartData = {
    labels: [200, 300, 400],
    datasets: [
      {
        label: [100, 200, 300, 400, 500],
        backgroundColor: "transparent",
        pointBackgroundColor: "#ddd",
        lineTension: 0.1,
        borderColor: "rgba(75,192,192,1)",

        data: performanceFirst
      },
      {
        label: [100, 200, 300, 400, 500],
        backgroundColor: "transparent",
        pointBackgroundColor: "#ddd",
        lineTension: 0.1,
        borderColor: "rgba(33, 65,192,1)",

        data: performanceSecond
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
