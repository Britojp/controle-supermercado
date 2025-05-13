<template>
  <div class="d-flex flex-column bg-white rounded-xl elevation-1 pa-4" style="height: 100%;">
    <div class="d-flex justify-space-between mb-4">
    <v-btn
      prepend-icon="mdi-plus-circle-outline"
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

        <v-data-table-virtual
      v-model:search="search"
      :items="items"
      item-value="id"
      fixed-header
      class="rounded-lg bg-white table-custom"
      height="100%"
      density="comfortable"
    >

    </v-data-table-virtual>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TableEmployees',
  props: {
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
    };
  },
};
</script>

<style scoped>
.search-field {
  max-width: 300px;
}

</style>
