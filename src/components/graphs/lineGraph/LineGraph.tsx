import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  Plugin,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import { AnyObject } from "chart.js/types/basic";
import { Line } from "react-chartjs-2";

type LineChartProps = {
  borderColor: string;
  backgroundColor: string;
  showGridLines?: boolean;
  labels?: string[];
  data: number[];
  title?: string;
  legend?: string;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const plugins: Plugin<"line", AnyObject>[] = [
  {
    id: "line",
    afterDraw: (chart: {
      tooltip?: any;
      scales?: any;
      ctx?: any;
      data?: any;
    }) => {
      let ctx = chart.ctx;
      let _stroke = ctx.stroke;

      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 5;

        _stroke.apply(this, arguments);
        ctx.restore();
      };
    }
  }
];

const LineGraph = ({
  labels = [],
  data,
  borderColor,
  backgroundColor,
  showGridLines = false,
  title = "",
  legend = ""
}: LineChartProps) => {
  const options = {
    layout: {
      padding: 10
    },
    responsive: true,
    plugins: {
      legend: {
        display: legend ? true : false
      },
      title: {
        display: title ? true : false
      }
    },
    maintainAspectRatio: false,

    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      x: {
        display: showGridLines,
        grid: {
          display: showGridLines
        },
        gridLines: {
          display: showGridLines
        },
        ticks: {
          display: showGridLines
        }
      },
      y: {
        display: showGridLines,
        grid: {
          display: showGridLines
        },
        gridLines: {
          display: showGridLines
        },
        ticks: {
          display: showGridLines
        }
      }
    }
  };

  const datasets = {
    labels: labels.length > 0 ? labels : data.map((d) => d.toString()),
    datasets: [
      {
        data: data,
        fill: 1,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        lineTension: 0.3,
        borderWidth: 3,
        pointRadius: 0
      }
    ]
  };

  return <Line options={options} data={datasets} plugins={plugins} />;
};

export default LineGraph;
