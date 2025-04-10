<template>
    <v-card 
    width="400"
    :class="`pa-4 d-flex align-center ${colorBg}`" 
    elevation="3" 
    rounded="md"
    >
      <v-icon 
      size="36"
      color="white" 
      class="me-4"
      >
      mdi-currency-usd
    </v-icon>
      <div>
        <div 
        class="text-caption text-white"
        >
          {{title}}
        </div>
        <div class="text-subtitle-1 font-weight-bold">
          R$ {{price}}
        </div>
      </div>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-icon 
            v-bind="props" 
            size="24" 
            color="yellow-darken-2" 
            class="ms-auto"
          >
            mdi-information
          </v-icon>
        </template 
        >
        <span>{{ informationMessage }}</span>
      </v-tooltip>

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
        price : {type: Number, required: true},
        informationMessage : {type: String, required: true},
    },

}

</script>