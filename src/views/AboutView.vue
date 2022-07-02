<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1>COVID 19 vizualización</h1>
      </div>
    </div>
    <div class="row mt-5" v-if="arrPositivo.length > 0">
      <div class="col">
        <h2>casos positivo</h2>
        <linea-chart
          :chartData="arrPositivo"
          :options="chartOptions"
          :label="Positivo"
        ></linea-chart>
      </div>
    </div>
    <div class="row mt-5" v-if="arrNegativo.length > 0">
      <div class="col">
        <h2>casos negativo</h2>
        <linea-chart
          :chartData="arrNegativo"
          :options="chartOptions"
          :label="Negativo"
        ></linea-chart>
      </div>
    </div>
    <div class="row mt-5" v-if="arrHospitalizacion.length > 0">
      <div class="col">
        <h2>Hospitalizados</h2>
        <linea-chart
          :chartData="arrHospitalizacion"
          :options="chartOptions"
          :label="Hospitalizados"
        ></linea-chart>
      </div>
    </div>
    <div class="row mt-5" v-if="arrEnUsiActualmente.length > 0">
      <div class="col">
        <h2>En USI</h2>
        <linea-chart
          :chartData="arrEnUsiActualmente"
          :options="chartOptions"
          :label="inIcuCurrently"
        ></linea-chart>
      </div>
    </div>
    <div class="row mt-5" v-if="arrOnVentilador.length > 0">
      <div class="col">
        <h2>Casos reportados</h2>
        <linea-chart
          :chartData="arrOnVentilador"
          :options="chartOptions"
          :label="onVentilatorCurrently"
        ></linea-chart>
      </div>
    </div>
    <div class="row mt-5" v-if="arrMuertes.length > 0">
      <div class="col">
        <h2>Muertes</h2>
        <linea-chart
          :chartData="arrMuertes"
          :options="chartOptions"
          :label="death"
        ></linea-chart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
// import { Bar } from "vue-chartjs";
import { Bar } from "vue-chartjs/legacy";

import LineaChart from "./LineaChart.vue";
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
  components: { Bar, LineaChart },
  data() {
    return {
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
