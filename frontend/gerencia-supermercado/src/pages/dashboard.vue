<template>
  <v-sheet class="bg-green-lighten-5  px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card
    class="pa-4 d-flex flex-column bg-white"
    width="90%"
    height="90%"
    elevation="2"
    prepend-icon="mdi-monitor-dashboard"
    title="Dashboard"
    >


    <div class="d-flex flex-row justify-center align-center">
      <Card class="ma-3"title="Valor de Saída"  colorBg="bg-green-darken-1" colorIcon="text-white" :price="2000" informationMessage="Valor total de todas as mercadorias vendidas"/>
      <Card class="ma-3" title="Valor de entrada"  colorBg="bg-red-accent-2" colorIcon="text-white" :price="1000" informationMessage="Valor total de todas as mercadorias compradas"/>
      <Card class="ma-3"title="Saldo total"  colorBg="bg-green-darken-1" colorIcon="text-white" :price="1000" informationMessage="Diferença entre o valor total de saída e o valor total de entrada"/>
    </div>

    <v-divider></v-divider>


    <div class="d-flex flex-wrap justify-center">
      <div class="d-flex flex-column align-center h-75">
      <BarChart class="ma-3" :labels="labels" :datasets="datasets"/>
      <BarChart class="ma-3" :labels="labels" :datasets="datasets"/>
      </div>
      <div class="d-flex flex-column align-center h-75">
      <BarChart class="ma-3" :labels="labels" :datasets="datasets"/>
      <BarChart class="ma-3" :labels="labels" :datasets="datasets"/>
      </div>
      <div class="d-flex flex-column align-center h-75">
      <BarChart class="ma-3" :labels="labels" :datasets="datasets"/>
      <BarChart class="ma-3" :labels="labels" :datasets="datasets"/>

    </div>
    </div>

    </v-card>
</v-sheet>
</template>


<script lang="ts">
import BarChart from '@/components/BarChart.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'main',
  components: {BarChart, Card},

  data () {
    return {
    labels : [ 'January', 'February', 'March' ],
    datasets: [ { data: [40, 20, 12] } ]
  }
  },

}

</script>
