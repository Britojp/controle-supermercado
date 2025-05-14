<template>
  <v-sheet class="rounded bg-green-lighten-3 h-100 w-100 d-flex justify-end ">

    <div class="d-flex justify-center align-center w-100">
    <v-img
      src="../../public/main-bg.png"
      alt="Imagem de Login"
      class="h-75 w-75 d-flex justify-center align-center"
    ></v-img>
  </div>

    <v-container class="pa-0 ma-0" style="max-width: 25%;">
      <v-card class="bg-green-lighten-5 px-6 py-10 h-screen d-flex flex-column align-center justify-center  elevation-5">
        <div class="w-100">


          <div class="d-flex flex-column text-center">
            <label class="text-h3 font-weight-bold mb-2 text-grey-darken-3">
              Bem vindo!
            </label>
            <br>
            <label class="text-body-2 mb-6 text-grey-darken-2">
              Controle de estoque eficiente para o seu supermercado.
            </label>
          </div>

          <v-text-field
            v-model="email"
            prepend-icon="mdi-account"
            :rules="[(v: string) => !!v || 'Digite um email válido']"
            class="mb-4 font-weight-bold"
            label="Email"
            density="comfortable"
            variant="underlined"
            type="e-mail"
            required
            color="green-darken-3"
          ></v-text-field>

          <v-text-field
            v-model="password"
            prepend-icon="mdi-lock"
            :rules="[(v: string) => !!v || 'Digite uma senha válida']"
            class="mb-6 font-weight-bold"
            label="Senha"
            density="comfortable"
            variant="underlined"
            required
            :type="show ? 'text' : 'password'"
              counter
              :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="show = !show"
              color="green-darken-3"
            ></v-text-field>

          <v-btn
          :loading="loading"
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block
            :onclick="verifyInputs"
          >
              Entrar
          </v-btn>
          <v-btn
          @click="fetchUserData"
          >
          teste
        </v-btn>

        </div>
      </v-card>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { getAllUsers } from '@/services/api';


export default{
  data(){
    return {
      loading: false,
      email: '',
      password: '',
      show : false,
      allUsers: [] as any[]
    };
  },
  methods: {
    verifyInputs() {
      this.loading = true;
      if(this.email === '' || this.password === '' ){
        return true
      }
      this.loading = false;
    },
    fetchUserData() {
      getAllUsers()
      .then((data: { results: any[] }) => {
        this.allUsers = data.results;
          }).catch((error: Error) => {

      console.error("Erro ao carregar usuários populares:", error);
    })
  }
  },
  computed: {
},
}

</script>
