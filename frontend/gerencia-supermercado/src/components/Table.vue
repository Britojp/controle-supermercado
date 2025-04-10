<template>
    <v-table
      height="300px"
      fixed-header
      >
      <thead>
        <tr>
          <th class="text-center">
            Nome Funcionário
          </th>
          <th class="text-center">
            Email
          </th>
          <th class="text-center">
            Senha
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  <script lag=ts >
    export default {
    name: 'Table',
    components: {},
    
    props: {
      user: {
      type: Array,
      required: true,
      default: () => [
        {
        name: 'Nome Funcionário',
        email: 'Email',
        password: 'Senha'
        }
      ]
      }
    },

    data() {
    }
}
  </script>