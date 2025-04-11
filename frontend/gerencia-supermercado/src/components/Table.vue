<template>
<v-data-table-virtual
  :headers="headers"
  :items="users"
  height="100%"
  item-value="name"
  fixed-header
>
  <template #item.password="{ item }"
  >
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
    }
  },

  data() {
  return {
    show: false,
  };
  }
};
</script>

<style scoped>

</style>
