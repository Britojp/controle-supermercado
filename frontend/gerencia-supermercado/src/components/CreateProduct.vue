<template>
  <v-card class="bg-white elevation-0" flat>
    <v-radio-group v-model="typeTransaction" inline>
      <v-radio label="Entrada" value="entrada" class="mr-2" />
      <v-radio label="Saída" value="saida" />
    </v-radio-group>

    <div v-if="typeTransaction === 'entrada'">
      <v-form ref="form">

        <v-divider class="my-4" />
        <v-card-title class="text-subtitle-1">Informações do Produto</v-card-title>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Nome do produto"
              v-model="productName"
              :rules="[rulesForm.maxLenghtRule(30), rulesForm.requiredRule]"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>

          <v-col cols="4">
            <v-select
              :items="allCategories"
              label="Categoria"
              item-title="name"
              item-value="id"
              v-model="categoryName"
              :rules="[rulesForm.requiredRule]"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>

          <v-col cols="4">
            <v-text-field
              label="Número do lote"
              type="number"
              v-model="lotNumber"
              :rules="[rulesForm.integerRule, rulesForm.requiredRule, rulesForm.minRule(0)]"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
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
                  :rules="[rulesForm.requiredRule]"
                  variant="outlined"
                  color="green-darken-3"
                  class="hint-custom"
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

          <v-col cols="4">
            <v-text-field
              label="Quantidade"
              type="number"
              v-model="inputQuantity"
              :rules="[rulesForm.integerRule, rulesForm.requiredRule, rulesForm.minRule(0)]"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>

          <v-col cols="4">
            <v-select
              :items="supplier"
              label="Fornecedor"
              item-title="name"
              item-value="id"
              v-model="selectedSupplier"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>
        </v-row>

        <v-divider class="my-4" />
        <v-card-title class="text-subtitle-1">Valores</v-card-title>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Valor de custo por unidade"
              type="number"
              v-model="costValue"
              :rules="[rulesForm.requiredRule, rulesForm.integerRule]"
              append-inner-icon="mdi-currency-usd"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>

          <v-col cols="4">
            <v-text-field
              label="Preço de venda por unidade"
              type="number"
              v-model="sellPrice"
              :hint="costValue ? (sellPrice ? `Margem de lucro: ${((Number(sellPrice) - Number(costValue)) /Number(sellPrice) * 100).toFixed(2)}%` : `Preço sugerido: ${Number(costValue) * 1.5}`) : ''"
              :rules="[rulesForm.requiredRule, rulesForm.integerRule]"
              append-inner-icon="mdi-currency-usd"
              persistent-hint
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>

          <v-col cols="2">
            <v-text-field
              label="Porção"
              type="number"
              v-model="portion"
              :rules="[rulesForm.integerRule, rulesForm.requiredRule, rulesForm.minRule(0)]"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>

          <v-col cols="2">
            <v-select
              :items="unitsOfMeasure"
              label="Medida"
              item-title="name"
              item-value="id"
              v-model="selectedUnit"
              :rules="[rulesForm.requiredRule]"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>
        </v-row>

        <v-divider class="my-4" />
        <v-card-title class="text-subtitle-1">Informação Nutricional</v-card-title>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Proteína (g)"
              type="number"
              v-model="proteinQuantity"
              :rules="[rulesForm.integerRule, rulesForm.minRule(0)]"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>

          <v-col cols="4">
            <v-text-field
              label="Gordura (g)"
              type="number"
              v-model="fatnessQuantity"
              :rules="[rulesForm.integerRule, rulesForm.minRule(0)]"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>

          <v-col cols="4">
            <v-text-field
              label="Carboidrato (g)"
              type="number"
              v-model="carbohydrateQuantity"
              :rules="[rulesForm.integerRule, rulesForm.minRule(0)]"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>
        </v-row>

        <v-divider class="my-4" />
        <v-card-title class="text-subtitle-1">Localização no Estoque</v-card-title>
        <v-row>
          <v-col cols="6">
            <v-select
              :items="corridors"
              label="Número do corredor"
              item-title="name"
              item-value="id"
              v-model="corridor"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>

          <v-col cols="6">
            <v-select
              :items="shelves"
              label="Número da prateleira"
              item-title="name"
              item-value="id"
              v-model="shelf"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>
        </v-row>

        <!-- Seção Marca -->
        <v-divider class="my-4" />
        <v-card-title class="text-subtitle-1">Marca</v-card-title>
        <v-radio-group v-model="registrationMarca" inline>
          <v-radio label="Cadastrar" value="cadastrar" class="mr-2" />
          <v-radio label="Já cadastrado" value="existente" />
        </v-radio-group>

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-if="registrationMarca === 'cadastrar'"
              label="Nome da Marca"
              v-model="brandName"
              :rules="[rulesForm.maxLenghtRule(30), rulesForm.requiredRule]"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
            <v-autocomplete
              v-else
              v-model="brandName"
              :items="brands"
              label="Selecione a marca"
              item-title="name"
              item-value="id"
              :rules="[value => !!value || 'Selecione uma marca válida']"
              variant="outlined"
              color="green-darken-3"
              class="hint-custom"
            />
          </v-col>
        </v-row>
      </v-form>
    </div>

    <v-btn
    color="green"
    class="mt-4"
    @click="createNewTransaction">
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



export default {
    name: 'CreateProduct',
    data() {
        return {
            sellPrice: '',
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
            inputQuantity: '',
            costValue: '',
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
            carbohydrateQuantity: '',
            proteinQuantity: '',
            fatnessQuantity: '',
            portion: '',
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
  const userId = user?.id || '';
  if (!userId) {
    console.error('Usuário não encontrado. Certifique-se de que o usuário está autenticado.');
    return;
  }


  const transaction: CreateTransactionDTO = {
    transaction_type: this.typeTransaction.toUpperCase() as TransactionType,
    quantity: Number(this.inputQuantity),
    price: Number(this.costValue),
    user: {id: userId},
    supplier: {id: this.selectedSupplier},
    product: {
      name: this.productName,
      nutrition: {
        portion: Number(this.portion),
        protein_quantity: Number(this.proteinQuantity),
        fatness_quantity: Number(this.fatnessQuantity),
        carbohydrate_quantity: Number(this.carbohydrateQuantity),
        measurement: { id: this.selectedUnit },
      },
      category: { id: this.categoryName },
      brand: { id: '' },
    }
  }


  try {
    if (this.registrationMarca === 'cadastrar') {
      const store = brandsStore();
      await store.createBrand({
        name: this.brandName,
      });
      transaction.product.brand.id = store.allBrands.find(brand => brand.name === this.brandName)?.id || '';

    } else {
      const selectedBrand = this.brands.find(
        (brand) => brand.id === this.brandName || brand.name === this.brandName
      );
      if (selectedBrand) {
        transaction.product.brand.id = selectedBrand.id;
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

</style>
