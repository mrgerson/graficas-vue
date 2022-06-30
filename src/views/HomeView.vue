<template>
  <div class="container">
    <div class="card col-md-8">
      <Bar :chart-data="chartData" />
    </div>
  </div>
</template>

<script>
// import { Bar } from 'vue-chartjs'
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
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Enero", "Febrero", "Marzo"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#1B35DA",
            data: [40, 20, 12],
          },
        ],
      },
    };
  },
};
</script>
