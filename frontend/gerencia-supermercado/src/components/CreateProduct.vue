<template>
  <v-card class="bg-white elevation-0" flat>
    <v-radio-group v-model="typeTransaction" inline>
      <v-radio label="Entrada" value="entrada" class="mr-2" />
      <v-radio label="Saída" value="saida" />
    </v-radio-group>

    <div v-if="typeTransaction === 'entrada'">
      <v-form ref="form">
        <v-row>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              label="Nome do produto"
              variant="outlined"
              class="hint-custom"
              maxlength="30"
              persistent-hint
              :rules="[rulesForm.maxLenghtRule(30), rulesForm.requiredRule]"
              v-model="productName"
            />
          </v-col>

          <v-col cols="3">
            <v-select
              :items="allCategories"
              label="Categoria do Produto"
              item-title="name"
              item-value="id"
              color="green-darken-3"
              variant="outlined"
              class="hint-custom"
              :rules="[rulesForm.requiredRule]"
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
              persistent-hint
              :rules="[rulesForm.integerRule, rulesForm.requiredRule]"
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
                  persistent-hint
                  :rules="[rulesForm.requiredRule]"
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
        </v-row>

        <v-row>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              type="number"
              label="Quantidade"
              variant="outlined"
              class="hint-custom"
              maxlength="5"
              persistent-hint
              :rules="[rulesForm.integerRule, rulesForm.requiredRule, rulesForm.minRule(0)]"
              v-model="inputQuantity"
            />
          </v-col>

          <v-col cols="3">
            <v-select
              :items="supplier"
              label="Fornecedor"
              item-title="name"
              item-value="id"
              color="green-darken-3"
              variant="outlined"
              class="hint-custom"
              v-model="selectedSupplier"
              />
          </v-col>



          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              type="number"
              label="Valor de custo por unidade"
              variant="outlined"
              class="hint-custom"
              append-inner-icon="mdi-currency-usd"
              persistent-hint
              :rules="[rulesForm.requiredRule, rulesForm.integerRule]"
              v-model="costValue"
            />
          </v-col>


          <v-col cols="1">
            <v-text-field
              color="green-darken-3"
              type="number"
              label="Porção"
              variant="outlined"
              class="hint-custom"
              maxlength="5"
              persistent-hint
              :rules="[rulesForm.integerRule, rulesForm.requiredRule, rulesForm.minRule(0)]"
              v-model="portion"
              />
            </v-col>


                <v-col cols="2">
              <v-select
                :items="unitsOfMeasure"
                label="Medida"
                item-title="name"
                item-value="id"
                color="green-darken-3"
                variant="outlined"
                class="hint-custom"
                :rules="[rulesForm.requiredRule]"
                v-model="selectedUnit"
              />
            </v-col>
        </v-row>

        <v-row>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              type="number"
              label="Quantidade de proteína"
              variant="outlined"
              class="hint-custom"
              maxlength="5"
              persistent-hint
              :rules="[rulesForm.integerRule, rulesForm.requiredRule, rulesForm.minRule(0)]"
              v-model="proteinQuantity"
            />
          </v-col>

          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              type="number"
              label="Quantidade de gordura"
              variant="outlined"
              class="hint-custom"
              maxlength="5"
              persistent-hint
              :rules="[rulesForm.integerRule, rulesForm.requiredRule, rulesForm.minRule(0)]"
              v-model="fatnessQuantity"
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              color="green-darken-3"
              type="number"
              label="Quantidade de carboidrato"
              variant="outlined"
              class="hint-custom"
              maxlength="5"
              persistent-hint
              :rules="[rulesForm.integerRule, rulesForm.requiredRule, rulesForm.minRule(0)]"
              v-model="carbohydrateQuantity"
            />
          </v-col>
          <v-col cols="3">
            <v-select
              :items="corridors"
              label="Número do corredor"
              item-title="name"
              item-value="id"
              color="green-darken-3"
              variant="outlined"
              class="hint-custom"
              v-model="corridor"
              />
            </v-col>
        </v-row>

        <v-row>


            <v-col cols="3">
              <v-select
                :items="shelves"
                label="Número da prateleira"
                item-title="name"
                item-value="id"
                color="green-darken-3"
                variant="outlined"
                class="hint-custom"
                v-model="shelf"
              />
            </v-col>
        </v-row>

        <v-card-title class="text-subtitle-1">Marca</v-card-title>
        <v-radio-group v-model="registrationMarca" inline>
          <v-radio label="Cadastrar" value="cadastrar" class="mr-2" />
          <v-radio label="Já cadastrado" value="existente" />
        </v-radio-group>

        <v-row>
          <v-col cols="3" v-if="registrationMarca === 'cadastrar'">
            <v-text-field
              color="green-darken-3"
              label="Nome da Marca"
              variant="outlined"
              class="mb-5 hint-custom"
              maxlength="30"
              :rules="[rulesForm.maxLenghtRule(30), rulesForm.requiredRule]"
              v-model="brandName"
            />
          </v-col>
          <v-col cols="3" v-else>
            <v-autocomplete
              v-model="brandName"
              :items="brands"
              label="Selecione a marca"
              item-title="name"
              item-value="id"
              color="green-darken-3"
              variant="outlined"
              class="mb-5 hint-custom"
              :rules="[value => !!value || 'Selecione uma marca válida']"
            />
          </v-col>

        </v-row>
      </v-form>
    </div>

    <v-btn 
    color="green"
    class="mt-4"
    @click="createNewTransaction"
    >
      Confirmar
    </v-btn>
  </v-card>
</template>


<script lang="ts">
import { useDate } from 'vuetify';
import rulesForm from '@/utils/rules-form';
import { brandsStore } from '@/stores/brandsStore';
import type { Corridors, Meansurement, Shelves } from '@/utils/interfaces';
import { categoriesStore } from '@/stores/categoriesStore';
import type { CategoriesDTO } from '@/dto/categories.dto';
import { uitsOfMeansureStore } from '@/stores/unitsOfMeansureStore';
import { shelvesStore } from '@/stores/shelvesStore';
import { corridorsStore } from '@/stores/corridorsStore';
import type { BrandDTO } from '@/dto/brands.dto';
import type { CreateTransactionDTO, TransactionType } from '@/dto/transaction.dto';
import type { SupplierDTO } from '@/dto/supplier.dto';
import { supplierStore } from '@/stores/supplierStore';
import { toast } from 'vue3-toastify';



export default {
    name: 'CreateProduct',
    data() {
        return {
            registrationMarca: 'cadastrar',
            typeTransaction: 'entrada' as TransactionType,
            validationForms: false,
            brands : [] as BrandDTO[],
            shelves: [] as Shelves[],
            corridors: [] as Corridors[],
            productName: '',
            brandName: '',
            lotNumber: '',
            shelf: '',
            tempDate: '',
            inputQuantity: 0,
            costValue: 0,
            categoryName: '',
            corridor: '',
            menuDate: false,
            date : useDate(),
            rulesForm: rulesForm,
            selectedUnit: '',
            unitsOfMeasure: [] as Meansurement[],
            allCategories: [] as CategoriesDTO[],
            supplier: [] as SupplierDTO[],
            selectedSupplier: '',
            carbohydrateQuantity: 0,
            proteinQuantity: 0,
            fatnessQuantity: 0,
            portion: 0,
        };
    },
    methods: {

    async loadAllCategories(){
      try{
        const store = categoriesStore();
        await store.fetchCategories();
        this.allCategories = store.allCategories;
      } catch (e) {
        console.error(e);
      }
    },

    async loadAllBrands() {
      try {
        const store = brandsStore();
        await store.fetchBrands();
        this.brands = store.allBrands;
      } catch (e) {
        console.error(e);
      }
    },

    async loadAllUnitsOfMeasure() {
      try {
        const store = uitsOfMeansureStore();
        await store.fetchMeansurements();
        this.unitsOfMeasure = store.allUnits;
      } catch (e) {
        console.error(e);
      }
    },

    async loadAllCorridors() {
      try {
        const store = corridorsStore();
        await store.fetchCorridors();
        this.corridors = store.allCorridors;
      } catch (e) {
        console.error(e);
      }
    },

    async loadAllShelves() {
      try {
        const store = shelvesStore();
        await store.fetchShelves();
        this.shelves = store.allShelves;
      } catch (e) {
        console.error(e);
      }
    },

   async loaAllSuppliers() {
    try{
      const store = supplierStore();
      await store.fetchSuppliers();
      this.supplier = store.allSuppliers;
    } catch (e) {
      console.error(e);
    }

    },
async createNewTransaction() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const transaction: CreateTransactionDTO = {
    type: this.typeTransaction,
    quantity: Number(this.inputQuantity),
    price: Number(this.costValue),
    products: {
      name: this.productName,
      nutritions: {

        portion: Number(this.portion),
        protein_quantity: Number(this.proteinQuantity),
        fatness_quantity: Number(this.fatnessQuantity),
        carbohydrate_quantity: Number(this.carbohydrateQuantity),
        id_meansurements: this.selectedUnit,
      },
      id_categories: this.categoryName,
      id_brands: '',
    },
    id_users: user?.id || '',
    id_suppliers: this.selectedSupplier,
  };

  try {
    if (this.registrationMarca === 'cadastrar') {
      transaction.products.id_brands = this.brandName;
    } else {
      const selectedBrand = this.brands.find(
        (brand) => brand.id === this.brandName || brand.name === this.brandName
      );
      if (selectedBrand) {
        transaction.products.id_brands = selectedBrand.id;
      } else {
        throw new Error('Marca selecionada não encontrada');
      }
    }

    this.$emit('transaction-created', transaction);
  } catch (error) {
    console.error('Erro ao criar transação:', error);
  }
},


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
    categoryName() { this.checkFields()

    }
  },
    mounted(){
    this.loadAllBrands();
    this.loadAllCategories();
    this.loadAllUnitsOfMeasure();
    this.loadAllCorridors();
    this.loadAllShelves();
    this.loaAllSuppliers();
  },
};
</script>

<style>
.hint-custom .v-messages__message {
    color: red;
    font-style: italic;
}
</style>
