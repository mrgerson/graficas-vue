<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1>graficas</h1>
      </div>
    </div>
    <div class="card">
      <div class="row">
        <div class="col-md-6" v-if="arrPositivo.length > 0">
          <div class="col">
            <h2>casos positivo</h2>
            <linea-chart
              :chartData="arrPositivo"
              :options="chartOptions"
              label="Positivo"
              :chartColors="positiveChartColors"
            ></linea-chart>
          </div>
        </div>
        <div class="col-md-6" v-if="arrMuertes.length > 0">
          <div class="col">
            <h2>Muertes</h2>
            <linea-chart
              :chartData="arrMuertes"
              :options="chartOptions"
              label="Muertos"
              :chartColors="positiveChartColors"
            ></linea-chart>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12" v-if="arr_mes.length > 0">
          <h2>meses año</h2>
          <columna
            :options="chartOptions"
            :rango="arr_rango"
            :chartData="arr_mes"
            label="meses"
          ></columna>
        </div>
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
import Columna from "../components/Columna.vue";
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
  components: { Bar, LineaChart, Columna },
  data() {
    return {
      positiveChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#372772",
        BackgroundColor: "#74A57F",
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
      //para la grafica de columnas
      arr_rango: [],
      arr_mes: [],
    };
  },
  async created() {
    //console.log(response.data);
    this.grafica_meses();

    try {
      const res = await axios.get(
        "https://api.covidtracking.com/v1/us/daily.json"
      );
      /* console.log(res); */
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
      });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    grafica_meses() {
      const meses = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const rango = [40, 20, 12, 39, 80, 40, 39, 30, 40, 20, 12, 11];
      this.arr_mes = meses;
      this.arr_rango = rango;
    },
  },
};
</script>
