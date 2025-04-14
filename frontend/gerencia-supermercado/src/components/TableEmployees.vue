<template>
  <v-text-field
          v-model="search"
          density="compact"
          label="Pesquisar Funcionário"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
          class="mx-2"
        />
    <v-data-table-virtual
    v-model:search ="search"
    :headers="headers"
    :items="users"
    height="100%"
    item-value="name"
    fixed-header
    >


  <template #item.password="{ item }: { item: { password: string; icon: string } }">
  
      <span>{{ item.password }}</span>
      <v-icon 
      class="pl-5"
      >
       {{item.icon}}
       </v-icon>
  </template>

</v-data-table-virtual>

</template>

<script lang="ts">
export default {
  name: 'Table',
  components: {},
  
  props: {
    headers: {
      type: Array,
      required: true,
    },
    users: {
      type: Array,
      required: true
    },
  },

  data() {
  return {
    show: false,
    search: "",
  };
  },

  methods : {

    
  },

};
</script>

<style scoped>

</style>
