import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Plugin,
  Title,
  Tooltip
} from "chart.js";
import { AnyObject } from "chart.js/types/basic";
import { _DeepPartialArray } from "chart.js/types/utils";
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels";
import { Align } from "chartjs-plugin-datalabels/types/options";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const plugins2: Plugin<"bar", AnyObject>[] = [
  {
    id: "bar",
    afterRender: (chart: {
      tooltip?: any;
      scales?: any;
      ctx?: any;
      data?: any;
      controller?: any;
    }) => {
      let ctx = chart.ctx;
      console.log(ctx.controller);
      ctx.font = 13;
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      chart.data.datasets.forEach(function (dataset: any) {
        dataset.bars.forEach(function (bar: any) {
          ctx.fillText(bar.value, bar.x, bar.y - 5);
        });
      });
    }
  },
  ChartDataLabels
];

const align:
  | number
  | "start"
  | "end"
  | "left"
  | "right"
  | "bottom"
  | "top"
  | "center"
  | ((context: Context) => Align)
  | _DeepPartialArray<Align>
  | undefined = "left";

const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  events: [],
  plugins: {
    legend: {
      display: false,
      position: "right" as const
    },
    datalabels: {
      display: true,
      color: "black",
      align: align,
      font: { size: 15 }
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart"
    }
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
      grid: {
        display: false
      },
      gridLines: {
        display: false
      }
    },
    y: {
      display: true,
      grid: {
        display: false
      },
      gridLines: {
        display: false,
        drawBorder: false
      },
      ticks: {}
    }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [31, 23, 15, 33, 55, 24, 70],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderRadius: 20,
      borderWidth: 0,
      barPercentage: 0.9,
      categoryPercentage: 0.55,
      barThickness: 12
    }
  ]
};

const HorizontalBarChart = () => {
  return <Bar options={options} data={data} plugins={plugins2} />;
};

export default HorizontalBarChart;
