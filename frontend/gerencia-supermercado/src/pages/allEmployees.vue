<template>
    <v-sheet class="bg-green-lighten-5  px-5 py-3 h-screen d-flex justify-center align-center">
      <v-card 
        class="pa-4 d-flex flex-column bg-white"
        width="90%"
        height="90%"
        elevation="2"
        prepend-icon="mdi-account-multiple"
        title="Consultar todos os funcionários"
        >
      
        <v-divider></v-divider>

        <Table></Table>
  
  </v-card>
    </v-sheet>
  </template>
  
  
  <script lang="ts">
import Table from '@/components/Table.vue';

  
  export default {
    name: 'allEmployees',
    components: {Table},
  
    data () {
      return {
  
    }
    },
  
  }
  
  </script>
  