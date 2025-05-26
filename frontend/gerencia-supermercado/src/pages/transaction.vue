<template>
  <v-sheet class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card
      class="pa-6 bg-white"
      width="90%"
      height="90%"
      elevation="2"
      flat
      title="Movimentação de Mercadoria"
      prepend-icon="mdi-cart-plus"
      variant="text"
    >
      <v-divider class="mb-6"></v-divider>

        <v-card
          class="mx-auto mb-8"
          width="50%"
          variant="tonal"
          color="amber-accent-4"
          prepend-icon="mdi-information"
          title="Movimentação de Mercadoria"
          subtitle="Registre uma entrada ou saída de produtos no estoque."
        >
          <template #text>
            Escolha o tipo de movimentação desejada (entrada ou saída), selecione o produto, defina a quantidade e informe os dados complementares, como data e responsável.
            No caso de entradas, certifique-se de vincular ao fornecedor correto.
            A movimentação só será registrada após clicar no botão <strong>Confirmar</strong>.
          </template>
        </v-card>


      <CreateProduct />
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreateProduct from '@/components/CreateProduct.vue';


export default defineComponent({
  name: 'transaction',
  components: {
    CreateProduct,
  },
});
</script>
