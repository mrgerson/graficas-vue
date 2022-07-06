<script>
import { Bar } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  extends: Bar,
  props: {
    chartData: {
      type: Array,
    },
    rango: {
      type: Array,
    },
    label: {
      type: String,
    },
    options: {
      type: Object,
    },
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.renderChart(
      {
        labels: this.chartData,
        datasets: [
          {
            label: this.label,
            backgroundColor: "#f87979",
            data: this.rango,
          },
        ],
      },
      this.options
    );
  },
};
</script>
