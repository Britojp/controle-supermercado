<template>
  <v-card
    class="pa-4 d-flex flex-column bg-white"
    width="90%"
    height="90%"
    elevation="2"
    prepend-icon="mdi-account-plus"
    title="Cadastro de novo fornecedor"
  >
    <v-divider></v-divider>

    <v-container class="w-75">
      <v-card
        class="ma-5"
        title="Editar fornecedor"
        subtitle="Atualize os dados do fornecedor com informações válidas."
        text="Certifique-se de que o nome tenha pelo menos 3 caracteres e o e-mail esteja em formato correto. As alterações serão aplicadas somente após confirmar clicando no botão Salvar."
        variant="tonal"
        color="amber-accent-4"
        prepend-icon="mdi-information"
      ></v-card>

      <v-form ref="form">
        <v-row dense>
          <v-col cols="12" sm="6">
            <v-text-field
              color="green-darken-3"
              label="Nome"
              variant="outlined"
              :rules="[rulesForm.requiredRule, rulesForm.maxLenghtRule(30)]"
              class="mb-5 hint-custom"
              v-model="name"
              counter="30"
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              color="green-darken-3"
              label="Telefone"
              variant="outlined"
              class="mb-5 hint-custom"
              v-model="phone"
              counter="30"
              @input="formatPhone"
              :rules="[rulesForm.requiredRule, phoneRule]"
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              color="green-darken-3"
              v-model="cnpj"
              label="CNPJ"
              variant="outlined"
              class="mb-5 hint-custom"
              @input="formatCNPJ"
              :rules="computedCNPJ"
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete
              color="green-darken-3"
              item-value="id"
              v-model="state"
              label="Estado"
              variant="outlined"
              class="mb-5 hint-custom"
              :items="states.map(state => state.name)"
              :rules="[value => !!value || 'Selecione um estado válido']"
              key="id"
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              color="green-darken-3"
              v-model="cep"
              label="CEP"
              variant="outlined"
              class="mb-5 hint-custom"
              @input="formatCEP"
              :rules="[cepRule]"
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              color="green-darken-3"
              v-model="complement"
              label="Complemento"
              variant="outlined"
              class="mb-5 hint-custom"
            />
          </v-col>
        </v-row>

        <div class="d-flex justify-center mt-6">
          <v-btn icon class="bg-green-darken-3 mr-10"
          :disabled="!formValid"
          @click="saveRegister"
          >
            <v-icon>mdi-check</v-icon>
          </v-btn>

          <v-btn
          icon
          class="bg-red-darken-3 ml-10"
          @click="$emit('pressClose', false)
          ">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>


<script lang="ts">
import rulesForm from '@/utils/rules-form';
import type { States, Supplier } from '@/utils/intefaces';
import { supplierStore } from '@/stores/supplierStore';

export default {
  name: 'ModalRegisterSupplier',
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
    supplier: {
      type: Object as () => Supplier | null,
      default: null,
    }
  },
  data() {
    return {
      name: '',
      phone: '',
      cnpj: '',
      complement: '',
      state: '',
      cep: '',
      show: false,
      rulesForm,
      states : [] as States[],
      validationEnabled: true,
    };
  },
  watch: {
  supplier: {
    immediate: true,
    handler(newSupplier: Supplier | null) {
      if (newSupplier) {
        this.name = newSupplier.name;
        this.phone = newSupplier.phone;
        this.cnpj = newSupplier.cnpj;
        this.complement = newSupplier.complement;
        this.state = newSupplier.state;
        this.cep = newSupplier.cep;
      }
    }
  }
},
  computed: {
  isEditing(): boolean {
    return this.supplier !== null;
  },
      computedCNPJ () {
        if(!this.validationEnabled) return [];
        return[
        (value: string) => value.length > 16 || 'Exemplo: 12.345.678/0001-00'
        ]
      },
formValid(): boolean {
    return this.rulesForm.requiredRule(this.name) === true &&
          this.phoneRule(this.phone) === true &&
          this.state !== '' &&
          this.cepRule(this.cep) === true;
  },
  },

  mounted(){
this.loadStates();
},


methods: {
    async loadStates() {
        try {
          const store = supplierStore();
          await store.fetchStates()
          this.states = store.states
        } catch(e) {
          console.error(e)
        }
      },

saveRegister() {
  const form = this.$refs.form as any;

  form.validate().then((isValid: boolean) => {
    if (!isValid) return;

    const fornecedor: Supplier = {
      id: this.isEditing ? this.supplier!.id : '',
      name: this.name.trim(),
      phone: this.phone.trim(),
      cnpj: this.cnpj.trim(),
      complement: this.complement.trim(),
      state: this.state.trim(),
      cep: this.cep.trim(),
    };

    const eventName = this.isEditing ? 'edit' : 'submit';
    this.$emit(eventName, fornecedor);

    if (!this.isEditing) {
      this.resetFormFields();
    }
  });
},
  resetFormFields() {
        this.name = ''
        this.phone = ''
        this.cnpj = ''
        this.complement = ''
        this.state = ''
        this.cep = ''
  },
  formatCNPJ() {
      let digits = this.cnpj.replace(/\D/g, '').slice(0, 14)
      digits = digits.replace(/^(\d{2})(\d)/, '$1.$2')
      digits = digits.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      digits = digits.replace(/\.(\d{3})(\d)/, '.$1/$2')
      digits = digits.replace(/(\d{4})(\d)/, '$1-$2')
      this.cnpj = digits
    },

    formatPhone() {
      let digits = this.phone.replace(/\D/g, '').slice(0, 11)
      if (digits.length >= 2) {
        digits = digits.replace(/^(\d{2})(\d)/, '($1) $2')
      }
      if (digits.length >= 7) {
        digits = digits.replace(/(\d{5})(\d{4})$/, '$1-$2')
      }
      this.phone = digits
    },

    formatCEP() {
        let digits = this.cep.replace(/\D/g, '').slice(0, 8)
        if (digits.length > 5) {
          digits = digits.replace(/^(\d{5})(\d)/, '$1-$2')
        }
        this.cep = digits
    },

    phoneRule: (v: string) => {
    const cleaned = v.replace(/\D/g, '');
    return cleaned.length === 11 || 'Telefone deve ter 11 dígitos';
  },

    cepRule: (v: string) => {
    const cleaned = v.replace(/\D/g, '');
    return cleaned.length === 8 || 'CEP deve ter 8 dígitos';
  },
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
