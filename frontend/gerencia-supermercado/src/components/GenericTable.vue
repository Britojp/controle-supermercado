<template>
  <div class="d-flex flex-column bg-white rounded-xl elevation-1 pa-4" style="height: 100%;">
    <div class="d-flex justify-space-between mb-4">
    <v-btn
        prepend-icon="mdi-plus-circle-outline"
        @click="$emit('toggleRegister', true)"
      >

        {{ buttonString }}
  </v-btn>
      <v-text-field
        v-model="search"
        density="compact"
        label="Pesquisar"
        placeholder="Digite algo..."
        prepend-inner-icon="mdi-magnify"
        clearable
        variant="outlined"
        bg-color="grey-lighten-4"
        class="search-field"
      />
    </div>

  <v-data-table
    v-model:search="search"
    :headers="header"
    :items="items"
    class="rounded-lg bg-white table-custom"
    density="comfortable"
    item-value="name"
    hide-default-footer
    hover
    style="overflow-y: auto;"
  >

    <template #item.actions="{ item } ">
      <v-btn
      size="large"
      icon
      variant="text"
      color="red"
      @click="$emit('deleteItem', item)"
      >
      <v-icon>mdi-delete-circle</v-icon>
      </v-btn>

    </template>

    <template #item.edit="{ item } ">
      <v-btn
      size="large"
      icon
      variant="text"
      color="blue"
      @click="$emit('editItem', item)"
      >
      <v-icon>mdi-pencil-circle</v-icon>
      </v-btn>
    </template>

    </v-data-table>
  </div>
</template>

<script lang="ts">
import type { UserDTO } from '@/dto/users.dto';


export default {
  name: 'TableEmployees',
  props: {
    header: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true,
    },
    buttonString: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      search: '',
      registerFlag: false,
      funcionarios: [] as UserDTO[]

    };
  },
  methods: {

    addNewEmployee(employee: UserDTO) {
      this.funcionarios.push(employee);
      this.registerFlag = false;
    }
  }
};
</script>

<style scoped>
.search-field {
  max-width: 300px;
}
</style>
