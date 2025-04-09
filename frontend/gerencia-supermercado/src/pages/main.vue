<template>
  <v-sheet class="bg-green-lighten-5  px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card 
    class="pa-4 d-flex flex-column bg-white"
    width="100%"
    height="100%"
    elevation="5">

    <v-card-item>
      <v-avatar 
      class="me-4 rounded"
      size="60" 
      color="green-darken-4"
      >
      <v-icon size="32" color="white">mdi-monitor-dashboard</v-icon>
      </v-avatar>
      <span 
        class="text-h4 color-grey-darken-4"
        >
          Dashboard
      </span>
    </v-card-item>

    <div class="d-flex flex-row justify-center align-center">    
      <Card class="ma-3" title="Valor de entrada"  colorBg="bg-red-accent-2" colorIcon="text-white" :price="1000"/>
      <Card class="ma-3"title="Valor de Saída"  colorBg="bg-green-darken-1" colorIcon="text-white" :price="2000"/>
      <Card class="ma-3"title="Saldo total"  colorBg="bg-green-darken-1" colorIcon="text-white" :price="1000"/>
    </div>

    <div class="d-flex flex-wrap justify-center align-center">
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
<NavBar class/>
</template>


<script lang="ts">
import BarChart from '@/components/BarChart.vue';
import NavBar from '@/components/NavBar.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'main',
  components: {BarChart, NavBar, Card},

  data () {
    return{
    labels : [ 'January', 'February', 'March' ],
    datasets: [ { data: [40, 20, 12] } ]
  }
  },

}

</script>
