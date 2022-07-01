<template>
  <div class="container">
    <div class="card col-md-8">
      <Bar v-if="loaded" :chart-data="chartData" />
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
      loaded: false,
      datos: [],
      titulos: [],
      //   chartData: null,
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
  async mounted() {
    this.loaded = false;

    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => mostrarData(json));

      const mostrarData = (json) => {
        for (let index = 0; index < json.length; index++) {
          const element = json[index];

          console.log(element);
         
        }
      };

      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
