<template>
  <v-sheet class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center">
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
          ></v-card>
      
          <v-form ref="form" >
          <v-text-field
            color="green-darken-3"
            label="Nome"
            variant="outlined"
            :rules="computedNameRules"
            class="mb-5 hint-custom"
            v-model="name"
            @input="enableValidation"
            maxlength="30"
            hint="*Obrigatório"
            persistent-hint
          />

          <v-text-field
            color="green-darken-3"
            label="Email"
            variant="outlined"
            :rules="computedEmailRules"
            class="mb-5 hint-custom "
            v-model="email"
            @input="enableValidation"
            maxlength="30"
            hint="*Obrigatório"
            persistent-hint
          />

          <v-text-field
            color="green-darken-3"
            v-model="password"
            label="Senha"
            variant="outlined"
            :rules="computedPasswordRules"
            :type="show ? 'text' : 'password'"
            counter
            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="show = !show"
            @input="enableValidation"
            class="mb-5 hint-custom"
            maxlength="30"
            hint="*Obrigatório"
            persistent-hint
          />

          <v-btn
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block
            class="mb-5"
          >
            Registrar
          </v-btn>
        </v-form>
          
          <transition name="fade">
            <v-alert
              v-if="alert"
              border="top"
              border-color="succes"
              icon="$success"
              title="Cadastro realizado com sucesso"
              color="success"
              subtitle="Sucesso"
              text="O funcionário foi criado com sucesso"
              class="position-absolute top-0 right-0 m-3"
              type="success"
            >
            </v-alert>
          </transition>
        </v-container>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
export default {
  name: 'register',
  data () {
  return {
    name: '',
    email: '',
    password: '',
    validationEnabled: true,
    show: false,
    alert: false,
  }
},
computed: {
  computedNameRules() {
    if (!this.validationEnabled) return [];
    return [
      (value: string) => !!value || 'O nome do funcionário é obrigatório.',
      (value: string) => value.length >= 3 || 'O nome deve ter pelo menos 3 caracteres.'
    ];
  },
  computedEmailRules() {
    if (!this.validationEnabled) return [];
    return [
      (value: string) => !!value || 'O email do funcionário é obrigatório.',
      (value: string) => value.includes('@') || 'E-mail inválido',
      (value: string) => (value.endsWith('.com') || value.endsWith('.com.br')) ||  'Exemplo: joaocarlos@email.com',
    ];
  },
  computedPasswordRules() {
    if (!this.validationEnabled) return [];
    return [
      (value: string) => !!value || 'A senha do funcionário é obrigatória.',
      (value: string) => value.length >= 6 || 'A senha deve ter pelo menos 6 caracteres.'
    ];
  }
},


methods: {
  
  enableValidation() {
    this.validationEnabled = true;
  },
  saveRegister() {
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 3000);
  },
  verifyRegister() {
    this.validationEnabled = true;

    const nameValid = this.computedNameRules.every(rule => rule(this.name) === true);
    const emailValid = this.computedEmailRules.every(rule => rule(this.email) === true);
    const passwordValid = this.computedPasswordRules.every(rule => rule(this.password) === true);

    if (nameValid && emailValid && passwordValid) {
      this.saveRegister();
      this.name = '';
      this.email = '';
      this.password = '';
      this.validationEnabled = false;
    }
  }
}
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
