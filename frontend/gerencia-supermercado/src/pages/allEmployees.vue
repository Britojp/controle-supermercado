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

        <TableEmployees :headers="headers" :items="funcionarios"></TableEmployees>

  </v-card>
    </v-sheet>
  </template>


  <script lang="ts">
import TableEmployees from '@/components/TableEmployees.vue';


  export default {
    name: 'allEmployees',
    components: {TableEmployees},

    data () {
      return {

    headers : [
    { title: 'Nome do Funcionário', align: 'center', key: 'name'},
    { title: 'E-mail', align: 'center', key: 'email' },
    { title: 'Senha', align: 'center', key: 'password'},
  ],
    funcionarios :[
  {
    name: 'Ana Souza',
    email: 'ana.souza@example.com',
    password: 'senha123',
  },
  {
    name: 'Carlos Lima',
    email: 'carlos.lima@example.com',
    password: '123senha',
  },
  {
    name: 'Fernanda Oliveira',
    email: 'fernanda.oliveira@example.com',
    password: 'minhasenha',
  },
  {
    name: 'João Pedro',
    email: 'joao.pedro@example.com',
    password: 'joao1234',
  },
  {
    name: 'Mariana Costa',
    email: 'mariana.costa@example.com',
    password: 'cost@123',
  },
  {
    name: 'Rafael Martins',
    email: 'rafael.martins@example.com',
    password: 'martins@2024',
  },
  {
    name: 'Luciana Ferreira',
    email: 'luciana.ferreira@example.com',
    password: 'lucy9876',
  },
  {
    name: 'Bruno Rocha',
    email: 'bruno.rocha@example.com',
    password: 'brunor!2023',
  },
  {
    name: 'Patrícia Mendes',
    email: 'patricia.mendes@example.com',
    password: 'pat123mendes',
  },
  {
    name: 'Thiago Barbosa',
    email: 'thiago.barbosa@example.com',
    password: 'tbarbosa!',
  }
]

    }
    },

  }

  </script>
