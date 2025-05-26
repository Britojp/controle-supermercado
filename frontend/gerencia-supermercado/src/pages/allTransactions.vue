<template>
  <v-sheet
    class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card
      class="pa-4 d-flex flex-column bg-white"
      width="90%"
      height="90%"
      elevation="2"
      prepend-icon="mdi-currency-usd"
      title="Consultar todas as transações"
    >
      <v-divider></v-divider>
    </v-card>


  </v-sheet>
</template>

<script lang="ts">

export default {
  name: 'allTransactions',
  components: {},

  data() {
    return {
    }
  },

  methods: {
    },

  mounted() {

  },
}
</script>
