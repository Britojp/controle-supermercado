<template>
  <v-sheet class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card class="pa-4 bg-white" width="90%" height="90%" elevation="0" flat prepend-icon="mdi-cart-plus" title="Movimentação de Mercadoria" variant="text">
      <v-divider class="mb-5"></v-divider>

      <v-stepper :items="header" v-model="step" alt-labels class="bg-white" elevation="0" error-icon="mdi-alert-circle">
        
        <template v-slot:next class="flex flex-center">
          <v-btn icon @click="goNext" class="bg-green-darken-3">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </template>
        
        <template v-slot:prev>
          <v-btn icon @click="goPrevious" class="bg-green-darken-3">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>

        <v-stepper-window>
          <v-stepper-window-item :value="1">
            <CreateSupplier @dados-validos="handleDadosValidos" />
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
import CreateSupplier from '@/components/CreateSupplier.vue';

export default {
  components: {
    CreateSupplier,
  },
  data() {
    return {
      step: 1,
      header: ['Fornecedor', 'Step 2', 'Step 3'],
      validatedData: false, 
    };
  },
  methods: {
    handleDadosValidos(isValid: boolean) {
      this.validatedData = isValid;
    },
    
    goNext() {
      if (this.step < 3 && this.validatedData) {
        this.step++;
      }
    },

    goPrevious() {
      if (this.step > 1) {
        this.step--;
      }
    },
  },
};
</script>
