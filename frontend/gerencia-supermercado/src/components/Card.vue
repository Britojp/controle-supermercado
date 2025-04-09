<template>
    <v-card 
     :class="`pa-4 d-flex flex-column ${colorBg}`"
     height="100"
     width="400"
     elevation="5">
 
     <v-card-item>
      <v-avatar 
      class="me-4 rounded"
      size="50" 
      >

      <v-icon 
      size="50"
      :class ="`${colorIcon}`"
      >
      mdi-currency-usd
    </v-icon>
  
      </v-avatar>
      <v-card-subtitle 
      color="grey-darken-3"
      class="text-h6 d-flex" 
      >
        {{title }}
    </v-card-subtitle>
    <span 
    class="text-p color-grey-darken-4"
    >
    R$ {{price}}
</span>

    </v-card-item>
    </v-card>
   </template>


<script lang="ts">
export default {
    components : {},
    name : 'Card',

    props : {
        title: {type: String, required: true},
        colorBg: {type: String, required: true},
        colorIcon : {type: String, required: true},
        price : {type: Number, required: true}

    },

}

</script>