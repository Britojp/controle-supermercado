<template>
   <v-card 
    class="pa-4 d-flex flex-column bg-white"
    height="400"
    width="400"
    elevation="5">

    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
   </v-card>
  </template>
  
  <script lang="ts">
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { defineComponent } from 'vue'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default defineComponent ({
    name: 'BarChart',
    components: { Bar },

    props: {
  labels: {
    type: Array,
    required: true
  },
  datasets: {
    type: Array,
    required: true
  },
},
computed: {
  chartData() {
    return {
      labels: this.labels,
      datasets: this.datasets,
    }
  },
  chartOptions() {
    return {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: 'Gráfico de Barras'
        }
      }
    }
  }
}
  });

  </script>