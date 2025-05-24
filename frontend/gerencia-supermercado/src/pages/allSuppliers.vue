<template>
  <v-sheet
    class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center"
  >
    <v-card
      class="pa-4 d-flex flex-column bg-white"
      width="90%"
      height="90%"
      elevation="2"
      prepend-icon="mdi-handshake"
      title="Consultar todos os fornecedores"
    >
      <v-divider></v-divider>
      <GenericTable
        :header="header"
        :items="fornecedores"
        button-string="Cadastrar novo fornecedor"
        @toggleRegister="toggleModal"
        @deleteItem="openDeleteDialog"
        @editItem="toggleEdit"
      />
      <v-dialog v-model="dialogOpen" max-width="50vw" width="50vw">
        <ModalRegisterAndEdit
          title="Cadastrar novos fornecedores"
          @submit="addNewSupplier"
          @pressClose="dialogOpen = false"
        />
      </v-dialog>
      <v-spacer />
    </v-card>

    <v-dialog v-model="toggleDelete" max-width="400" color="white">
      <v-card
        prepend-icon="mdi-delete-circle"
        text="Se o dado for excluído não será possível o recuperar"
        title="Tem certeza que deseja excluir?"
      >
        <v-card-actions>
          <v-btn @click="toggleDelete = false">Não</v-btn>
          <v-btn @click="confirmDelete" color="error">Sim</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="editOpen" max-width="50vw" width="50vw">
      <ModalRegisterAndEdit
        :Supplier="editedSupplier"
        title="Editar usuário"
        subtitle="Instruções para edição"
        subtitle2="Siga os passos abaixo para atualizar as informações"
        text="Atualize os campos necessários com informações válidas. Certifique-se de que o nome tenha pelo menos 3 caracteres e o email esteja em formato correto. As alterações serão aplicadas apenas após confirmar clicando no botão 'Salvar'."
        @edit="editSupplier"
        @pressClose="editOpen = false"
      />
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import GenericTable from '@/components/GenericTable.vue';
import ModalRegisterAndEdit from '@/components/ModalRegisterAndEdit.vue';
import type { Supplier } from '@/utils/intefaces';
import { toast } from 'vue3-toastify';
import { supplierStore } from '@/stores/supplierStore';
import type { SupplierDTO, CreateSupplierDTO, UpdateSupplierDTO } from '@/dto/supplier.dto';

export default {
  name: 'allSuppliers',
  components: { GenericTable, ModalRegisterAndEdit },

  data() {
    return {
      header: [
        { title: 'Id', key: 'id' },
        { title: 'Nome', key: 'name' },
        { title: 'Telefone', key: 'contact.tel_number' },
        { title: 'CNPJ', key: 'cnpj' },
        { title: 'Estado', key: 'address.state.name' },
        { title: 'CEP', key: 'address.cep' },
        { title: 'Complemento', key: 'address.complement' },
        { title: 'Excluir', key: 'actions', sortable: false },
        { title: 'Editar', key: 'edit', sortable: false },
      ],
      dialogOpen: false,
      fornecedores: [] as SupplierDTO[],
      toggleDelete: false,
      supplierToDelete: '',
      editOpen: false,
      editedSupplier: null as UpdateSupplierDTO | null,
    };
  },

  methods: {
    async loadAllSuppliers() {
      try {
        const store = supplierStore();
        await store.fetchSuppliers();
        this.fornecedores = store.allSuppliers;
      } catch (e) {
        console.error(e);
      }
    },

    async addNewSupplier(supplier: CreateSupplierDTO) {
    
    
      try {
        await supplierStore().createSupplier(supplier);
        toast.success('Fornecedor criado com sucesso!');
        this.loadAllSuppliers();
      }catch (error) {
        toast.error('Erro ao criar fornecedor.');

        if (axios.isAxiosError(error)) {
          console.error('Erro da API:', error.response?.data);
        } else {
          console.error(error);
        }
      }finally {
        this.dialogOpen = false;
      }
    },

  async editSupplier(supplier: SupplierDTO) {
    try {
      const updatePayload: UpdateSupplierDTO = {
        name: supplier.name,
        cnpj: supplier.cnpj,
        address: {
          cep: supplier.address.cep,
          complement: supplier.address.complement,
          id_state: supplier.address.state.id,
        },
        contact: {
          tel_number: supplier.contact.tel_number,
        }
      };
      
      await supplierStore().editSupplier(supplier.id, updatePayload);
      toast.success('Fornecedor editado com sucesso!');
      this.editOpen = false;
      this.loadAllSuppliers();
    } catch (error) {
      toast.error('Erro ao editar fornecedor');
      console.error(error);
    }
  },

    toggleModal(flag: boolean) {
      this.dialogOpen = flag;
    },

    toggleEdit(supplier: UpdateSupplierDTO) {
      this.editedSupplier = supplier;
      this.editOpen = true;
    },

    openDeleteDialog(supplier: Supplier) {
      this.supplierToDelete = supplier.id;
      this.toggleDelete = true;
    },

    async confirmDelete() {
      if (this.supplierToDelete) {
        await this.deleteSupplier(this.supplierToDelete);
      }
      this.toggleDelete = false;
    },

    async deleteSupplier(supplierId: string) {
      try {
        const store = supplierStore();
        await store.deleteSupplier(supplierId);
        this.fornecedores = this.fornecedores.filter(
          (s) => s.id !== supplierId
        );
        toast.success('Fornecedor excluído com sucesso');
      } catch (e) {
        toast.error('Erro ao tentar excluir');
      }
    },
  },

  mounted() {
    this.loadAllSuppliers();
  },
};
</script>
