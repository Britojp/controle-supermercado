<template >
    <v-card
              class="pa-4 d-flex align-center hover:shadow-lg transition-slow cursor-pointer"
              elevation="2"
              @click=""
              color="grey-lighten-4"
            >
              <v-icon size="40" color="black" class="mr-4">{{ icon }}</v-icon>
              <div>
                <div class="font-weight-bold text-subtitle-1">{{ title }}</div>
                <div class="text-body-2 text-grey-darken-1">
                  {{ description }}
                </div>
              </div>
            </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Button',
  props: {
    icon: {
      type: String,
      default: 'mdi-shape-outline'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.onClick();
    }
  }
});


</script>
