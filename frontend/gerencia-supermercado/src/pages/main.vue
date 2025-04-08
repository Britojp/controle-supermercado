<template>
  <v-sheet class="bg-green-lighten-5 pa-3 px-5 py-3 h-100 d-flex justify-center align-center">
    <v-card 
    class="pa-4 d-flex flex-column bg-white"
    width="1500"
    height="700"
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
        class="text-h4"
        color = "grey-darken-4"
        >
          Dashboard
      </span>

      <v-card-subtitle color="grey-darken-3">
        Acompanhe gráficos dos seus produtos
      </v-card-subtitle>
    </v-card-item>
    <ex></ex>
    </v-card>
</v-sheet>
<navBar class/>
</template>

<script lang="ts">

</script>
