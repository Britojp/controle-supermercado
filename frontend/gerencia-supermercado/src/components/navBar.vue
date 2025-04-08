<template>
        <v-navigation-drawer :width="300"
        class="bg-grey-darken-4"
          expand-on-hover
          rail
        >
          <v-list
  
          >
            <v-list-item
              prepend-icon="mdi-account-circle"
              subtitle="Email usuário"
              title="Nome usuário"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
          <v-list 
              density="compact" 
              nav
              >
              <v-list-item 
              prepend-icon="mdi-monitor-dashboard" 
              title="Dashboard" 
              value="dashboard" 
            ></v-list-item>
            <v-list-item 
              prepend-icon="mdi-account-multiple" 
              title="Cadastrar funcionário" 
              value="cadastro" 
            ></v-list-item>
            <v-list-item 
              prepend-icon="mdi-cart-variant" 
              title="Movimentação de Produtos" 
              value="movimentacao" 
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
  </template>
  
  <script lang="ts">
    export default {
        
    }
  </script>
  <style scoped>
  
  </style>