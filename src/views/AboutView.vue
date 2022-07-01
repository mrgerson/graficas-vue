<template>
  <div class="container">
    <div class="card col-md-8">
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
// import { Bar } from "vue-chartjs";
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
  props: {
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
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      arrPositivo: [],
      arrNegativo: [],
      arrHospitalizacion: [],
      arrEnUsiActualmente: [],
      arrOnVentilador: [],
      arrMuertes: [],
      chartData: {
        labels: ["Enero", "Febrero", "Marzo"],
        datasets: [{ data: [40, 20, 12], backgroundColor: "#1B35DA" }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  async created() {
            //console.log(response.data);
        try {
          const res = await axios.get("https://api.covidtracking.com/v1/us/daily.json")
          await res.data.forEach(d => {
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

              console.log(this.arrNegativo);

          })
        } catch (error) {
          console.log(error)
        }
  },
};
</script>
