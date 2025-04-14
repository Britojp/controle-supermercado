<template>
  <v-sheet class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card 
      class="pa-4  bg-white"
      width="90%"
      height="90%"
      elevation="2"
      prepend-icon="mdi-cart-plus"
      title="Movimentação de Mercadoria"
    >

    
      <v-divider class="mb-5"></v-divider>
     
      
      <v-card-title class="text-subtitle-1">Fornecedor</v-card-title>

      <v-radio-group 
      v-model="registrationCompany"
      inline>
        <v-radio 
        label="Cadastrar" 
        value="cadastrar" 
        class="mr-2"
        />
        <v-radio 
        label="Já cadastrado" 
        value="existente" />
      </v-radio-group>

      <v-form ref="form">
        <v-row v-if="registrationCompany === 'cadastrar'">
          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              label="Nome da Empresa"
              variant="outlined"
              class="mb-5 hint-custom"
              maxlength="30"
              hint="*Obrigatório"
              persistent-hint
              :rules = "computedName"
              
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3 "
              label="CNPJ"
              variant="outlined"
              class="mb-5 hint-custom"
              maxlength="17"
              hint="*Obrigatório"
              persistent-hint
              v-model="cnpj"
              @input = "formatCNPJ"
              :rules="computedCNPJ"
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              label="Telefone"
              variant="outlined"
              class="mb-5"
              hint="Exemplo: (32) 99322-8924"
              maxlength="15"
              v-model="phone"
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              label="CEP"
              variant="outlined"
              class="mb-5"
              hint="Exemplo: 74991-129"
              maxlength="11"
              v-model="cep"

            />
          </v-col>
          <v-col cols="3">
            <v-select
              color="green-darken-3"
              label="Estado"
              variant="outlined"
              class="mb-5"
            />
          </v-col>
        <v-divider></v-divider>
        
          
        </v-row>


        
        <v-row v-else>
          <v-col cols="6">
            <v-select
            label="Selecione o fornecedor"
            :items="fornecedores"
            item-title="nome"
            item-value="id"
            color="green-darken-3"
            variant="outlined"
            class="mb-5 hint-custom"
            hint="*Obrigatório"
            persistent-hint
            />
          </v-col>
        </v-row>
        
        <v-card-title class="text-subtitle-1 mt-5">Fornecedor</v-card-title>

        <v-row>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              variant="outlined"
              class="mb-5 hint-custom"
              maxlength="30"
              
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3 "
              variant="outlined"
              class="mb-5 hint-custom"
              maxlength="17"
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              variant="outlined"
              class="mb-5"
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              variant="outlined"
              class="mb-5"
              maxlength="11"

            />
          </v-col>
        
        
          
        </v-row>


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
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
export default {
  name: 'transaction',
  data() {
    return {
      registrationCompany: 'cadastrar', 
      fornecedores: [
        { id: 1, nome: 'Fornecedor A' },
        { id: 2, nome: 'Fornecedor B' },
        { id: 3, nome: 'Fornecedor C' },
      ],
      cnpj : '',
      phone: '',
      cep: '',
      validationEnabled: true,
    }
  },
  computed : {
    computedName () {
      if(!this.validationEnabled) return [];
      return[
      (value: string) => !!value || 'O nome da empresa é obrigatório.',
      (value: string) => value.length >= 1 || 'O nome da empresa deve ter pelo menos 3 caracteres.'
      ]
    },
    computedCNPJ () {
      if(!this.validationEnabled) return [];
      return[
      (value: string) => value.length > 16 || 'Exemplo: 12.345.678/0001-00'
      ]
    },


  },
  methods : {
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
  },
}
</script>

<style>
.hint-custom .v-messages__message {
  color: red; 
  font-style: italic;
}

</style>
