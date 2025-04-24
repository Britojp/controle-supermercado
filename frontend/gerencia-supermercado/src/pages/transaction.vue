<template>
  <v-sheet class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card class="pa-4 bg-white" width="90%" height="90%" elevation="0" flat prepend-icon="mdi-cart-plus" title="Movimentação de Mercadoria" variant="text">
      
      <v-divider class="mb-5"></v-divider>
      
      <v-stepper 
        v-model="step" 
        alt-labels 
        class="bg-white"
        elevation="0" 
        error-icon="mdi-alert-circle"
      >
        <v-stepper-header>
            <v-stepper-item
            title="Fornecedor"
            subtitle="Preencha os dados do fornecedor"
            :value="1"
            :rules="[() => validatedData]"
            :color="validatedData ? 'green-darken-4' : ''"
            :editable="validatedData"
          ></v-stepper-item>
  
          <v-divider></v-divider>
  
          <v-stepper-item
            title="Produtos"
            subtitle="Adicione os produtos"
            :value="2"
          ></v-stepper-item>
  
          <v-divider></v-divider>
  
          <v-stepper-item
            title="Resumo"
            subtitle="Revise os dados"
            :value="3"
          ></v-stepper-item>
        </v-stepper-header>
        
        <v-stepper-window>
          <v-stepper-window-item :value="1">
            <CreateSupplier @dados-validos="handleDadosValidos" />
          </v-stepper-window-item>
          <v-stepper-window-item :value="2">
            <CreateProduct/>
          </v-stepper-window-item>
          <v-stepper-window-item :value="3">
            <div>Conteúdo da Etapa 3</div>
          </v-stepper-window-item>
        </v-stepper-window>     
        
        <v-stepper-actions class="d-flex justify-center">
          <template v-slot:prev>
            <v-btn 
              icon 
              @click="goPrevious" 
              class="bg-green-darken-3 mr-10"
              :disabled="step === 1"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </template>
          
          <template v-slot:next>
            <v-btn 
              icon 
              @click="goNext" 
              class="bg-green-darken-3 ml-10"
              :disabled="step === 3 || !validatedData"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
        </v-stepper-actions>
      </v-stepper>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import CreateProduct from '@/components/CreateProduct.vue';
import CreateSupplier from '@/components/CreateSupplier.vue';

export default {
  components: {
    CreateSupplier,
    CreateProduct,
  },
  data() {
    return {
      step: 1, 
      validatedData: false,
    };
  },
  methods: {
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
    handleDadosValidos(isValid: boolean) {
      this.validatedData = isValid;
    },
  },

};
</script>
