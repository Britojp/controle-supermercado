<template>
    <v-card
        class="pa-4 d-flex flex-column bg-white"
        width="90%"
        height="90%"
        elevation="2"
        prepend-icon="mdi-account-plus"
        :title="title"
    >

        <v-divider></v-divider>

        <v-container class="w-75">
          <v-card
            class="ma-5"
            :title="subtitle "
            :subtitle="subtitle2 "
            :text="text "
            variant="tonal"
            color="amber-accent-4"
            prepend-icon="mdi-information"
          ></v-card>

          <v-form ref="form" >
          <v-text-field
            color="green-darken-3"
            label="Nome"
            variant="outlined"
            :rules="[rulesForm.requiredRule, rulesForm.maxLenghtRule(30)]"
            class="mb-5 hint-custom"
            v-model="name"
            counter="30"
          />

          <v-text-field
            color="green-darken-3"
            label="Email"
            variant="outlined"
            :rules="[rulesForm.emailRule, rulesForm.maxLenghtRule(30)]"
            class="mb-5 hint-custom "
            v-model="email"
            counter="30"
          />

          <v-text-field
            color="green-darken-3"
            v-model="password"
            label="Senha"
            variant="outlined"
            :rules="[rulesForm.maxLenghtRule(30), rulesForm.requiredRule]"
            :type="show ? 'text' : 'password'"
            counter = 30
            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="show = !show"
            class="mb-5 hint-custom"
            :disabled="isEditing"
          />

        <div class="d-flex justify-center mt-6">
          <v-btn
            icon
            class="bg-green-darken-3 mr-10"
            :disabled="!formValid"
            @click="saveRegister"
          >
            <v-icon>mdi-check</v-icon>
          </v-btn>

          <v-btn
            icon
            class="bg-red-darken-3 ml-10"
            @click="$emit('pressClose', false)"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        </v-form>
        </v-container>
    </v-card>
</template>

<script lang="ts">
import type { User } from '@/utils/intefaces';
import rulesForm from '@/utils/rules-form';

export default {
  name: 'RegisterEmployees',
  props: {
    title:{
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    subtitle2: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    user: {
    type: Object as () => User | null,
    default: null,
  },

  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      show: false,
      rulesForm,
    };
  },
  watch: {
  user: {
    immediate: true,
    handler(newUser: User | null) {
      if (newUser) {
        this.name = newUser.name;
        this.email = newUser.email;
        this.password = newUser.password;
      }
    }
  }
},
  computed: {
  formValid(): boolean {
    return this.rulesForm.requiredRule(this.name) === true &&
          this.rulesForm.emailRule(this.email) === true &&
          this.rulesForm.requiredRule(this.password) === true;
  },
  isEditing(): boolean {
    return this.user !== null;
  }
},
  methods: {

saveRegister() {
  const form = this.$refs.form as any;

  form.validate().then((isValid: boolean) => {
    if (!isValid) return;

    const funcionario: User = {
      id: this.isEditing ? this.user!.id : '',
      name: this.name.trim(),
      email: this.email.trim(),
      password: this.password,
    };

    const eventName = this.isEditing ? 'edit' : 'submit';
    this.$emit(eventName, funcionario);

    if (!this.isEditing) {
      this.resetFormFields();
    }
  });
},
  resetFormFields() {
    this.name = '';
    this.email = '';
    this.password = '';
  }


  },
};
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
