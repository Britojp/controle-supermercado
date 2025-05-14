<template>
  <v-sheet
    class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card
      class="pa-4 d-flex flex-column bg-white"
      width="90%"
      height="90%"
      elevation="2"
      prepend-icon="mdi-account-multiple"
      title="Consultar todos os funcionários"
    >
      <v-divider></v-divider>
      <TableEmployees
        :header="header"
        :items="funcionarios"
        button-string="Cadastrar novo Funcionário"
        @toggleRegister="toggleModal"
        @deleteItem="openDeleteDialog"
      ></TableEmployees>

      <v-dialog v-model="dialogOpen" max-width="800">
        <RegisterEmployees @submit="addNewEmployee" @pressClose="toggleModal" />
      </v-dialog>
      <v-spacer></v-spacer>
    </v-card>

    <v-dialog
      v-model="toggleDelete"
      max-width="400"
      persistent
      colort="white"
    >
      <v-card
        prepend-icon="mdi-delete-circle"
        text="Se o dado for excluído não será possível o recuperar"
        title="Tem certeza que deseja excluir?"
      >
        <v-card-actions>
          <v-btn @click="toggleDelete = false">
            Não
          </v-btn>
          <v-btn @click="confirmDelete" color="error">
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import TableEmployees from '@/components/TableEmployees.vue';
import RegisterEmployees from '@/components/RegisterEmployees.vue'
import type { User } from '@/utils/intefaces';
import { toast } from 'vue3-toastify';
import { userStore } from '@/stores/userStore';

export default {
  name: 'allEmployees',
  components: {TableEmployees, RegisterEmployees},

  data() {
    return {
      header: [
        { title: 'Id', key: 'id' },
        { title: 'Nome', key: 'name' },
        { title: 'Email', key: 'email' },
        { title: 'Excluir', key: 'actions', sortable: false },
      ],
      dialogOpen: false,
      userStore: userStore,
      funcionarios: [] as User[],
      loading: true,
      toggleDelete: false,
      userToDelete: null as string | null,
    }
  },
  methods: {
    async loadAllUsers() {
      try {
        const store = userStore();
        await store.fetchUserData();
        this.funcionarios = store.allUsers;
        this.loading = false;
      } catch(e) {
        toast.error("Erro ao carregar os dados");
      }
    },

    async addNewEmployee(employee: User) {
      try {
        await userStore().createNewUser(employee);
        toast.success('Cadastrado com sucesso');
        this.funcionarios.push(employee);
      } catch(e) {
        toast.error('Erro ao cadastrar o usuário');
      } finally {
        this.dialogOpen = false;
      }
    },

    toggleModal(flag: boolean) {
      this.dialogOpen = flag;
    },

    openDeleteDialog(userId: string) {
      this.userToDelete = userId;
      this.toggleDelete = true;
    },

    async confirmDelete() {
      if (this.userToDelete) {
        await this.deleteUser(this.userToDelete);
        this.userToDelete = null;
      }
      this.toggleDelete = false;
    },

    async deleteUser(userId: string) {
      try {
        const store = userStore();
        await store.deleteUser(userId);
        this.funcionarios = this.funcionarios.filter(user => user.id !== userId);
        toast.success("Usuário excluído com sucesso");
      } catch(e) {
        toast.error("Erro ao tentar excluir")
      }
    },
  },

  mounted() {
    this.loadAllUsers();
  },
}
</script>
