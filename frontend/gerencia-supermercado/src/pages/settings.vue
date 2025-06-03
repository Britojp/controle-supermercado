<template>
  <v-sheet
    class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center"
  >
    <v-card
      class="pa-4 d-flex flex-column bg-white"
      width="90%"
      height="90%"
      elevation="2"
      prepend-icon="mdi-cog"
      title="Configurações"
    >
      <v-divider class="mb-4"></v-divider>

      <div class="mb-6">
        <div class="text-h6 font-weight-bold mb-1">Organização do Estoque</div>
        <div class="text-body-2 text-grey-darken-1 mb-4">
          Defina a estrutura física do seu estoque para facilitar o armazenamento e localização dos produtos.
        </div>

          <v-col cols="auto" class="mx-2">
            <Button
              title="Cadastrar Categoria"
              description="Organize o estoque criando categorias para produtos, facilitando a navegação."
              @click="handleClick('categorias')"></Button>
            </v-col>

          <v-col cols="auto" class="mx-2">
            <Button
              title="Apagar Categoria"
              description="Organize o estoque criando categorias para produtos, facilitando a navegação."
              @click="handleClick('categorias')"></Button>
          </v-col>

          <v-col cols="auto" class="mx-2">
            <Button
              title="Cadastrar Corredor"
              description="Organize o estoque criando corredores para navegação eficiente."
              @click="handleClick('corredores')"></Button>
          </v-col>

          <v-col cols="auto" class="mx-2">
            <Button
              title="Apagar Corredor"
              description="Organize o estoque criando corredores para navegação eficiente."
              @click="handleClick('corredores')"></Button>
          </v-col>

          <v-col cols="auto" class="mx-2">
            <Button
              title="Cadastrar Prateleira"
              description="Organize o estoque criando prateleiras para produtos, facilitando a localização."
              @click="handleClick('prateleiras')"></Button>
          </v-col>

          <v-col cols="auto" class="mx-2">
            <Button
              title="Apagar Prateleira"
              description="Organize o estoque criando prateleiras para produtos, facilitando a localização."
              @click="handleClick('prateleiras')"></Button>
          </v-col>
      </div>


    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import Button from '@/components/Button.vue';
export default {
  components: {
    Button,
  },
  data(vm) {
    return {

    }
  },
  name: 'Settings',
  methods: {
    handleClick(section: string) {
    },
  },
};
</script>
