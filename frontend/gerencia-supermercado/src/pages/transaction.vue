<template>
  <v-sheet class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card 
      class="pa-4 bg-white"
      width="90%"
      height="90%"
      elevation="0"
      flat
      prepend-icon="mdi-cart-plus"
      title="Movimentação de Mercadoria"
      variant="text"
    >
      <v-divider class="mb-5"></v-divider>

      <v-stepper 
        :items="header"
        v-model="step"
        alt-labels 
        class="bg-white"
        elevation="0"
        error-icon="mdi-alert-circle"
        >
      <template 
      v-slot:next 
      class="flex flex-center"
      >
          <v-btn 
          icon 
          @click="step < 3 && step++"
          >
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </template>

        <template v-slot:prev>
          <v-btn icon @click="step > 0 && step--">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>

        <v-stepper-window>
          <v-stepper-window-item :value="1">
            <CreateSupplier />
          </v-stepper-window-item>
          <v-stepper-window-item :value="2">
            <div>Conteúdo da Etapa 2</div>
          </v-stepper-window-item>
          <v-stepper-window-item :value="3">
            <div>Conteúdo da Etapa 3</div>
          </v-stepper-window-item>
        </v-stepper-window>
      </v-stepper>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
export default {
  name: 'transaction',
  data() {
    return {
      step: 1,
      header: ['Fornecedor', 'Step 2', 'Step 3'],
    };
  }
}
</script>
