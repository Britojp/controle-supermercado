<template>
    <v-sheet class="bg-green-lighten-5  px-5 py-3 h-screen d-flex justify-center align-center">
      <v-card
        class="pa-4 d-flex flex-column bg-white"
        width="90%"
        height="90%"
        elevation="2"
        prepend-icon="mdi-account-multiple"
        title="Consultar todos os produtos"
        >

        <v-divider></v-divider>

        <GenericTable :header="header" :items="produtos" button-string="Cadastrar novo Produto"></GenericTable>

  </v-card>
    </v-sheet>
  </template>


  <script lang="ts">
import GenericTable from '@/components/GenericTable.vue';


  export default {
    name: 'products',
    components: {GenericTable},

    data () {
      return {
            header: [
      { title: 'Nome', key: 'name' },
      { title: 'Preço', key: 'price' },
      { title: 'Categoria', key: 'category' },
      { title: 'Estoque', key: 'stock' },
      { title: 'Código', key: 'code' },


    ],
    produtos: [
      {
        name: 'Arroz Integral 1kg',
        price: 8.99,
        category: 'Alimentos',
        stock: 120,
        code: 'AL001'
      },
      {
        name: 'Feijão Carioca 1kg',
        price: 6.49,
        category: 'Alimentos',
        stock: 85,
        code: 'AL002'
      },
      {
        name: 'Leite Integral 1L',
        price: 4.99,
        category: 'Laticínios',
        stock: 200,
        code: 'LAT001'
      },
      {
        name: 'Sabão em Pó 1kg',
        price: 12.90,
        category: 'Limpeza',
        stock: 45,
        code: 'LMP001'
      },
      {
        name: 'Óleo de Soja 900ml',
        price: 7.50,
        category: 'Alimentos',
        stock: 75,
        code: 'AL003'
      },
      {
        name: 'Papel Higiênico 12 rolos',
        price: 18.99,
        category: 'Higiene',
        stock: 60,
        code: 'HIG001'
      },
      {
        name: 'Açúcar Refinado 1kg',
        price: 4.29,
        category: 'Alimentos',
        stock: 100,
        code: 'AL004'
      },
      {
        name: 'Café em Pó 500g',
        price: 12.99,
        category: 'Alimentos',
        stock: 80,
        code: 'AL005'
      },
      {
        name: 'Detergente Líquido 500ml',
        price: 2.49,
        category: 'Limpeza',
        stock: 150,
        code: 'LMP002'
      },
      {
        name: 'Shampoo 350ml',
        price: 9.99,
        category: 'Higiene',
        stock: 40,
        code: 'HIG002'
      }
]

    }
    },

  }

  </script>
