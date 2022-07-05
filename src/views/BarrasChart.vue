<script>
// import { Bar } from 'vue-chartjs'
import { Bar } from "vue-chartjs/legacy";

export default {
  extends: Bar,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
    chartColors: {
      type: Object,
    },
  },
  mounted() {
        const dates = this.chartData.map(d => d.date).reverse();
        const totals = this.chartData.map(d => d.total).reverse();

        const {borderColor, pointBorderColor, pointBackgroundColor, BackgroundColor} = this.chartColors;

        this.renderChart({
            labels: dates,
            datasets: [{ 
                label: this.label,
                data: totals,
                borderColor: borderColor,
                pointBorderColor: pointBorderColor,
                pointBackgroundColor: pointBackgroundColor,
                BackgroundColor: BackgroundColor
            }]
        },
        this.options
        );
    },
  data() {
    return {
      /* chartData: {
        labels: ["Enero", "Febrero", "Marzo"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#1B35DA",
            data: [40, 20, 12],
          },
        ],
      }, */
    };
  },
};
</script>
