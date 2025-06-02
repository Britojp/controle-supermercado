<template>
  <v-navigation-drawer
    v-model="drawer"
    :width="300"
    class="blue-green-darken-4"
    expand-on-hover
    rail
    :rail-width="70"
    aria-label="Navigation Drawer"
  >
    <v-list>
      <v-list-item
        prepend-icon="mdi-account-circle"
        subtitle="Email usuário"
        title="Nome usuário"
        :class="listItemClass"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-monitor-dashboard"
        title="Dashboard"
        value="dashboard"
        to="/dashboard"
        :class="listItemClass"
      />
      <v-divider></v-divider>

      <v-list-item
        prepend-icon="mdi-package-variant-closed"
        title="Consultar todos os produtos"
        value="produtos"
        to="/produtos"
        :class="listItemClass"
      />

      <v-list-item
        prepend-icon="mdi-chart-bar"
        title="Consultar transações"
        value="transacoes"
        to="/transacoes"
        :class="listItemClass"
      />

      <v-list-item
        prepend-icon="mdi-account-group"
        title="Consultar todos os funcionários"
        value="funcionarios"
        to="/todos-funcionarios"
        :class="listItemClass"
      />

      <v-list-item
        prepend-icon="mdi-truck"
        title="Consultar todos os fornecedores"
        value="todos-fornecedores"
        to="/todos-fornecedores"
        :class="listItemClass"
      />

      <v-divider></v-divider>

      <v-list-item
        prepend-icon="mdi-swap-horizontal"
        title="Movimentação de Produtos"
        value="transacao"
        to="/transacao"
        :class="listItemClass"
      />

      <v-divider></v-divider>
    </v-list>
    <template v-slot:append>
      <div class="pa-2" >
        <v-list-item
        prepend-icon="mdi-cog"
        title="Configurações"
        value="configuracoes"
          to="/configuracoes"
          :class="listItemClass"
        />
      <v-divider></v-divider>
        <v-list-item
          prepend-icon="mdi-logout"
          title="Logout"
          value="logout"
          @click="logout"
          :class="listItemClass"
        />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue';
import { VNavigationDrawer, VList, VListItem, VDivider } from 'vuetify/components';
import { authStore } from '@/stores/authStore';

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
      drawer: JSON.parse(localStorage.getItem('drawerState') || 'true'),
    };
  },
  computed: {
    listItemClass(): string {
      return this.drawer ? '' : 'justify-center';
    },
  },
  watch: {
    drawer(newVal: boolean) {
      localStorage.setItem('drawerState', JSON.stringify(newVal));
    },
  },
  methods: {
    logout(): void {
      authStore().logout();
    },
  },
});
</script>

<style scoped>
.v-list-item {
  font-size: 18px;
}
</style>
