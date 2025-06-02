<template>
  <v-sheet
    class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center"
  >
    <v-card
      class="pa-4 d-flex flex-column bg-white"
      width="90%"
      height="90%"
      elevation="2"
      prepend-icon="mdi-cog"
      title="Configurações"
    >
      <v-divider class="mb-4"></v-divider>

      <div class="mb-6">
        <div class="text-h6 font-weight-bold mb-1">Organização do Estoque</div>
        <div class="text-body-2 text-grey-darken-1 mb-4">
          Defina a estrutura física do seu estoque para facilitar o armazenamento e localização dos produtos.
        </div>

          <v-col cols="auto" class="mx-2">
            <v-card
              class="pa-4 d-flex align-center hover:shadow-lg transition-slow cursor-pointer"
              elevation="2"
              @click="handleClick('categorias')"
              color="grey-lighten-4"
            >
              <v-icon size="40" color="black" class="mr-4">mdi-shape-outline</v-icon>
              <div>
                <div class="font-weight-bold text-subtitle-1">Cadastrar Categoria</div>
                <div class="text-body-2 text-grey-darken-1">
                  Organize o estoque criando categorias para produtos, facilitando a navegação.
                </div>
              </div>
            </v-card>
          </v-col>
                    <v-col cols="auto" class="mx-2">
            <v-card
              class="pa-4 d-flex align-center hover:shadow-lg transition-slow cursor-pointer"
              elevation="2"
              @click="handleClick('categorias')"
              color="grey-lighten-4"
            >
              <v-icon size="40" color="black" class="mr-4">mdi-shape-outline</v-icon>
              <div>
                <div class="font-weight-bold text-subtitle-1">Apagar Categoria</div>
                <div class="text-body-2 text-grey-darken-1">
                  Organize o estoque criando categorias para produtos, facilitando a navegação.
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="auto" class="mx-2">
            <v-card
              class="pa-4 d-flex align-center hover:shadow-lg transition-slow cursor-pointer"
              elevation="2"
              @click="handleClick('corredores')"
              color="grey-lighten-4"
            >
              <v-icon size="40" color="black" class="mr-4">mdi-view-parallel</v-icon>
              <div>
                <div class="font-weight-bold text-subtitle-1">Cadastrar Corredor</div>
                <div class="text-body-2 text-grey-darken-1">
                  Organize o estoque criando corredores para navegação eficiente.
                </div>
              </div>
            </v-card>
          </v-col>

           <v-col cols="auto" class="mx-2">
            <v-card
              class="pa-4 d-flex align-center hover:shadow-lg transition-slow cursor-pointer"
              elevation="2"
              @click="handleClick('corredores')"
              color="grey-lighten-4"
            >
              <v-icon size="40" color="black" class="mr-4">mdi-view-parallel</v-icon>
              <div>
                <div class="font-weight-bold text-subtitle-1">Apagar Corredor</div>
                <div class="text-body-2 text-grey-darken-1">
                  Organize o estoque criando corredores para navegação eficiente.
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="auto" class="mx-2">
            <v-card
              class="pa-4 d-flex align-center hover:shadow-lg transition-slow cursor-pointer"
              elevation="2"
              @click="handleClick('prateleiras')"
              color="grey-lighten-4"
            >
              <v-icon size="40" color="black" class="mr-4">mdi-wall-sconce-flat-outline</v-icon>
              <div>
                <div class="font-weight-bold text-subtitle-1">Cadastrar Prateleira</div>
                <div class="text-body-2 text-grey-darken-1">
                  Organize o estoque criando prateleiras para produtos, facilitando a localização.
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="auto" class="mx-2">
            <v-card
              class="pa-4 d-flex align-center hover:shadow-lg transition-slow cursor-pointer"
              elevation="2"
              @click="handleClick('prateleiras')"
              color="grey-lighten-4"
            >
              <v-icon size="40" color="black" class="mr-4">mdi-wall-sconce-flat-outline</v-icon>
              <div>
                <div class="font-weight-bold text-subtitle-1">Apagar Prateleira</div>
                <div class="text-body-2 text-grey-darken-1">
                  Organize o estoque criando prateleiras para produtos, facilitando a localização.
                </div>
              </div>
            </v-card>
          </v-col>
      </div>


    </v-card>
  </v-sheet>
</template>

<script lang="ts">
export default {
  name: 'Settings',
  methods: {
    handleClick(section: string) {
      console.log('Ir para:', section);
      // Aqui você pode usar o Vue Router para navegar, ex:
      // this.$router.push(`/configuracoes/${section}`);
    },
  },
};
</script>
