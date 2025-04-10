<template>
  <v-navigation-drawer 
    v-model="drawer"
    :width="300"
    class="bg-grey-darken-4"
    expand-on-hover
    rail
    :rail-width="70"
    style="font-size: 20px;"
  >
    <v-list>
      <v-list-item
        prepend-icon="mdi-account-circle"
        subtitle="Email usuário"
        title="Nome usuário"
        :class="drawer ? '' : 'justify-center'"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item 
        prepend-icon="mdi-monitor-dashboard" 
        title="Dashboard" 
        value="dashboard" 
        to="/dashboard"
        :class="!drawer ? 'justify-center' : ''"
      />

      <v-list-item 
        prepend-icon="mdi-account-plus" 
        title="Cadastrar funcionário" 
        value="cadastro" 
        to="/register"
        :class="!drawer ? 'justify-center' : ''"
      />
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Consultar todos os funcionários"
        value="funcionarios"
        to="/allEmployees"
        :class="!drawer ? 'justify-center' : ''"
        />

      <v-list-item 
        prepend-icon="mdi-cart-variant" 
        title="Movimentação de Produtos" 
        value="movimentacao"
        to="/transaction" 
        :class="!drawer ? 'justify-center' : ''"
      />
    </v-list>

    <v-divider></v-divider>

    <template v-slot:append>
      <div class="pa-2">
        <v-list density="compact" nav>
          <v-list-item 
            prepend-icon="mdi-logout" 
            title="Logout" 
            value="logout" 
            to="/"
            :class="!drawer ? 'justify-center' : ''"
          />
        </v-list>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VNavigationDrawer, VList, VListItem, VDivider } from 'vuetify/components';

export default defineComponent({
  name: 'NavBar',
  components: {
    VNavigationDrawer,
    VList,
    VListItem,
    VDivider,
  },
  data() {
    return {
      drawer: true,
    };
  },
});
</script>
