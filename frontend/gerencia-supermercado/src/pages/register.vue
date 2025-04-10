<template>
  <v-sheet class="bg-green-lighten-5  px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card 
        class="pa-4 d-flex flex-column bg-white"
        width="90%"
        height="90%"
        elevation="2"
        prepend-icon="mdi-account-plus"
        title="Registro de novos usuários"
        >
        <v-divider></v-divider>
        
        <v-container class="w-75">
      
                <v-card 
                class="ma-5"
                title="Instruções para Cadastro"
                subtitle="Siga os passos abaixo para se registrar"
                text="Preencha todos os campos obrigatórios com informações válidas. Certifique-se de que o nome tenha pelo menos 3 caracteres, insira um email válido e escolha uma senha segura. Clique no botão 'Registrar' para concluir o cadastro."
                variant="tonal"
                color="amber-accent-4"
                prepend-icon="mdi-information"
                >  
                </v-card>
      
      <v-text-field
        color="green-darken-3"
        label="Nome"
        variant="outlined"
        :rules="nameRules"
        class="mb-5"
        hint="Exemplo: João Carlos da Silva"
        maxlength="30"
              
      ></v-text-field>
      <v-text-field
        color="green-darken-3"
        label="Email"
        variant="outlined"
        :rules="emailRules"
        class="mb-5"
        hint="Exemplo: joaocarlos@gmail.com"
        maxlength = "30"
      ></v-text-field>

      <v-text-field
        color="green-darken-3"
        label="Senha"
        variant="outlined"
        :rules="passwordRules"
        :type="show ? 'text' : 'password'"
        counter
        :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append-inner="show = !show"
        class="mb-5"
        hint="Digite uma senha forte por questão de segurança"
        maxlength = "30"
      ></v-text-field>
        
      <v-btn
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block
          >
              Registrar
          </v-btn>
    </v-container>


             

</v-card>
</v-sheet>
</template>


<script lang="ts">




export default {
  name: 'register',
  components: {},

  data () {
    return {
      nameRules: [
        (value: string) => !!value || 'O nome do funcionário é obrigatório.',
        (value: string) => value.length >= 3 || 'O nome deve ter pelo menos 3 caracteres.'
      ],

      emailRules: [
        (value: string) => !!value || 'O email do funcionário é obrigatório.',
        (value: string) => value.includes('@') || 'E-mail inválido',
        (value: string) => (value.endsWith('.com') || value.endsWith('.com.br')) ||  'Exemplo: joaocarlos@gmail.com',
      ],

      passwordRules: [
        (value: string) => !!value || 'A senha do funcionário é obrigatória.',
        (value: string) => value.length >= 6 || 'A senha deve ter pelo menos 6 caracteres.'
      ],
      show : false,
  }
  },

}

</script>
