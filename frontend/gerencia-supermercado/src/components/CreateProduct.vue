<template>
    <v-card class="bg-white elevation-0" flat>
        <v-card-title class="text-subtitle-1">Marca</v-card-title>

        <v-form ref="form">
            <v-radio-group v-model="registrationMarca" inline>
                <v-radio label="Cadastrar" value="cadastrar" class="mr-2" />
                <v-radio label="Já cadastrado" value="existente" />
            </v-radio-group>

            <v-row>
                <v-col cols="12" v-if="registrationMarca === 'cadastrar'">
                    <v-row>
                        <v-col cols="3">
                            <v-text-field
                                color="green-darken-3"
                                label="Nome da Marca"
                                variant="outlined"
                                class="mb-5 hint-custom"
                                maxlength="30"
                                hint="*Obrigatório"
                                persistent-hint
                                :rules="[value => !!value || 'O nome da marca é obrigatório']"
                                v-model="brandName"
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col v-else>
                    <v-row>
                        <v-col cols="3">
                            <v-select
                            :items="Marcas"
                            label="Selecione a marca"
                            item-title="marca"
                            item-value="id"
                            color="green-darken-3"
                            variant="outlined"
                            class="mb-5 hint-custom"
                            hint="*Obrigatório"
                            persistent-hint
                            :rules="[value => !!value || 'Selecione uma marca válida']"
                            v-model="brandName"
                            />
                        </v-col>
                        </v-row>
                </v-col>
            </v-row>
            <v-card-title class="text-subtitle-1">Produto</v-card-title>
            <v-row>
                <v-col cols="3">
                    <v-text-field
                        color="green-darken-3"
                        label="Nome do produto"
                        variant="outlined"
                        class="hint-custom"
                        maxlength="30"
                        hint="*Obrigatório"
                        persistent-hint
                        :rules="[value => !!value || 'O nome do produto é obrigatório']"
                        v-model="productName"
                    />

                </v-col>
                <v-col cols="3">
                            <v-select
                            :items="Categoria"
                            label="Categoria do Produto"
                            item-title="categoria"
                            item-value="id"
                            color="green-darken-3"
                            variant="outlined"
                            class="mb-5 hint-custom"
                            hint="*Obrigatório"
                            persistent-hint
                            :rules="[value => !!value || 'Selecione uma categoria válida']"
                            v-model="categoryName"
                            />
                        </v-col>
                        <v-col cols="3">
                    <v-text-field
                        color="green-darken-3"
                        label="Número do lote"
                        type="number"
                        variant="outlined"
                        class="hint-custom"
                        maxlength="5"
                        hint="*Obrigatório"
                        persistent-hint
                        :rules="[value => !!value || 'O número do lote do produto é obrigatório']"
                        v-model="lotNumber"
                        />
                </v-col>
                <v-col cols="3">
                    <v-menu
                        v-model="menuDate"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                        >
                        <template #activator="{ props }">
                            <v-text-field
                            v-model="tempDate"
                            label="Data de Validade"
                            readonly
                            v-bind="props"
                            color="green-darken-3"
                            variant="outlined"
                            class="hint-custom"
                            hint="*Obrigatório"
                            persistent-hint
                            :rules="[value => !!value || 'Selecione uma Data de Validade']"
                            @input="selectDate"
                            />
                        </template>
                        <v-date-picker
                            v-model="tempDate"
                            class="bg-white"
                            show-adjacent-months
                            elevation="24"
                            @update:model-value="selectDate"
                            />
                        </v-menu>


                </v-col>
                <v-col cols="3">
                    <v-text-field
                        color="green-darken-3"
                        type="number"
                        label="Quantidade de entrada"
                        variant="outlined"
                        class="hint-custom"
                        maxlength="5"
                        hint="*Obrigatório"
                        persistent-hint
                        :rules="[value => !!value || 'A quantidade é obrigatória']"
                        v-model="inputQuantity"
                    />

                </v-col>
                <v-col cols="3">
                            <v-select
                            :items="Corredores"
                            label="Número do corredor"
                            item-title="nome"
                            item-value="id"
                            color="green-darken-3"
                            variant="outlined"
                            class="mb-5 hint-custom"
                            v-model="corredorNumber"
                            />
                        </v-col>
                        <v-col cols="3">
                            <v-select
                            :items="Prateleiras"
                            label="Número da prateleira"
                            item-title="nome"
                            item-value="id"
                            color="green-darken-3"
                            variant="outlined"
                            class="mb-5 hint-custom"
                            v-model="shelfNumber"
                            />
                        </v-col>
            </v-row>

        </v-form>
    </v-card>
</template>

<script lang="ts">
import { useDate } from 'vuetify';

export default {
    name: 'CreateProduct',
    data() {
        return {
            registrationMarca: 'cadastrar',
            validationForms: false,
            Categoria : ['Alimentos', 'Bebidas', 'Latícinios', 'Cafés e chás', 'Massas', 'Padarias', 'Higiene Pessoal', 'Limpeza', 'Congelados', 'Pet Shop'],
            Marcas : ['Tio João', 'Kicaldo', 'Soya', 'União', 'Parmalat', 'Pilão', 'Dona Benta', 'Palmolive', 'Ypê'],
            Prateleiras: ['P01', 'P02', 'P03', 'P04', 'P05', 'P06', 'P07', 'P08', 'P09', 'P10'],
            Corredores: ['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10'],
            productName: '',
            brandName: '',
            lotNumber: '',
            shelfNumber: '',
            tempDate: '',
            inputQuantity: 0,
            costValue: 0,
            categoryName: '',
            corredorNumber: '',
            menuDate: false,
            date : useDate()

        };
    },
    methods: {

    selectDate(date: string) {
    const formattedDate = this.date.format(date, 'keyboardDate');
    this.tempDate = formattedDate;
    this.menuDate = false;
    },
    checkFields() {
      const isValidation = [
        this.productName.trim(),
        this.brandName.trim(),
        this.lotNumber,
        this.tempDate,
        this.inputQuantity > 0,
        this.costValue > 0,
        this.categoryName.trim()
      ].every(field => field && field !== '');

      this.$emit('validate-data', isValidation);
    },
  },
  watch: {
    productName() { this.checkFields() },
    brandName() { this.checkFields() },
    lotNumber() { this.checkFields() },
    tempDate() { this.checkFields() },
    inputQuantity() { this.checkFields() },
    costValue() { this.checkFields() },
    categoryName() { this.checkFields() }
  }
};
</script>

<style>
.hint-custom .v-messages__message {
    color: red;
    font-style: italic;
}
</style>
