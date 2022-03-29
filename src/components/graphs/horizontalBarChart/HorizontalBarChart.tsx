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
import ChartDataLabels from "chartjs-plugin-datalabels";
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
      //let ctx = chart.ctx;
      // ctx.font = 13;
      // ctx.fillStyle = "red";
      // ctx.textAlign = "center";
      // ctx.textBaseline = "bottom";
      // chart.data.datasets.forEach(function (dataset: any) {
      //   dataset.bars.forEach(function (bar: any) {
      //     ctx.fillText(bar.value, bar.x, bar.y - 5);
      //   });
      // });
    }
  },
  ChartDataLabels
];

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
      display: false
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
  },
  animation: {
    duration: 1,
    onComplete: function (chart: any) {
      const chartInstance = chart.chart;
      const ctx = chartInstance.ctx;
      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.textBaseline = "bottom";
      data.datasets.forEach(function (dataset, i) {
        console.log(dataset);
        var meta = chartInstance.getDatasetMeta(i);
        meta.data.forEach(function (bar: any, index: any) {
          var data = dataset.data[index];
          ctx.fillText(data, bar.x + 15, bar.y + 6);
        });
      });
    }
  }
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [20, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "#FF8F6B",
        "#5B93FF",
        "#FF8F6B",
        "#5B93FF",
        "#FF8F6B",
        "#5B93FF"
      ],
      borderColor: "rgb(255, 99, 132)",
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
