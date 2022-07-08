<template>
  <div class="container">
    <div class="row mt-5" v-if="arrMuertes.length > 0">
      <div class="col">
        <h2>Muertes</h2>
        <barras-chart
          :chartData="arrMuertes"
          :options="chartOptions"
          label="Muertos"
          :chartColors="positiveChartColors"
        ></barras-chart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
// import { Bar } from "vue-chartjs";
import { Bar } from "vue-chartjs/legacy";

import BarrasChart from "./BarrasChart.vue";
//registrar todos los elementos
import "chart.js/auto";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  name: "BarChart",
  components: { Bar, BarrasChart },
  data() {
    return {
      positiveChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#372772",
        BackgroundColor: "#00D8FF",
      },
      arrPositivo: [],
      arrNegativo: [],
      arrHospitalizacion: [],
      arrEnUsiActualmente: [],
      arrOnVentilador: [],
      arrMuertes: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  async created() {
    //console.log(response.data);
    try {
      const res = await axios.get(
        "https://api.covidtracking.com/v1/us/daily.json"
      );
      await res.data.forEach((d) => {
        const date = moment(d.date, "YYYYMMDD").format("MM/DD/YY");

        const {
          positive,
          negative,
          hospitalizedCurrently,
          inIcuCurrently,
          onVentilatorCurrently,
          death,
        } = d;

        this.arrPositivo.push({ date, total: positive });
        this.arrNegativo.push({ date, total: negative });
        this.arrHospitalizacion.push({ date, total: hospitalizedCurrently });
        this.arrEnUsiActualmente.push({ date, total: inIcuCurrently });
        this.arrOnVentilador.push({ date, total: onVentilatorCurrently });
        this.arrMuertes.push({ date, total: death });

        //console.log(this.arrMuertes);
      });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
