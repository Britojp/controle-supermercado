<template>
  <v-sheet
    class="bg-grey-lighten-2
   px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card
      class="pa-4 d-flex flex-column bg-white"
      width="90%"
      height="90%"
      elevation="2"
      prepend-icon="mdi-account-group"
      title="Consultar todos os funcionários"
    >
      <v-divider></v-divider>
      <GenericTable
        :header="header"
        :items="funcionarios"
        button-string="Cadastrar novo Funcionário"
        @toggleRegister="toggleModal"
        @deleteItem="openDeleteDialog"
        @editItem="toggleEdit"
      ></GenericTable>

      <v-dialog v-model="dialogOpen" max-width="800">
        <RegisterEmployees
        title="Cadastrar novos usuários"
        subtitle="Instruções para Cadastro"
        subtitle2="Siga os passos abaixo para se registrar"
        text="Preencha todos os campos obrigatórios com informações válidas. Certifique-se de que o nome tenha pelo menos 3 caracteres, insira um email válido e escolha uma senha segura. Clique no botão 'Registrar' para concluir o cadastro."
        @submit="addNewEmployee"
        @pressClose="dialogOpen = false"
        />
      </v-dialog>
      <v-spacer></v-spacer>
    </v-card>

    <v-dialog
      v-model="toggleDelete"
      max-width="400"
      color="white"
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

    <v-dialog v-model="editOpen" max-width="800">
      <RegisterEmployees
        :user="editedUser"
        title="Editar usuário"
        subtitle="Instruções para edição"
        subtitle2="Siga os passos abaixo para atualizar as informações"
        text="Atualize os campos necessários com informações válidas. Certifique-se de que o nome tenha pelo menos 3 caracteres e o email esteja em formato correto. As alterações serão aplicadas apenas após confirmar clicando no botão 'Salvar'."
        @edit="editEmployee"
        @pressClose="editOpen = false"
      />
    </v-dialog>


  </v-sheet>
</template>

<script lang="ts">
import GenericTable from '@/components/GenericTable.vue';
import RegisterEmployees from '@/components/RegisterEmployees.vue'
import { toast } from 'vue3-toastify';
import { userStore } from '@/stores/userStore';
import type { UpdateUserDTO, UserDTO } from '@/dto/users.dto';


export default {
  name: 'allEmployees',
  components: {GenericTable, RegisterEmployees},

  data() {
    return {
      header: [
        { title: 'Id', key: 'id' },
        { title: 'Nome', key: 'name' },
        { title: 'Email', key: 'email' },
        { title: 'Excluir', key: 'actions', sortable: false },
        { title: 'Editar', key: 'edit', sortable: false }
      ],
      dialogOpen: false,
      userStore: userStore,
      funcionarios: [] as UserDTO[],
      loading: true,
      toggleDelete: false,
      userToDelete: '',
      editOpen: false,
      editedUser: null as UpdateUserDTO | null,
    }
  },

  methods: {
    async loadAllUsers() {
      try {
        const store = userStore();
        await store.fetchUsers();
        this.funcionarios = store.allUsers;
        this.loading = false;
      } catch(e) {
        console.error(e)
      }
    },

    async addNewEmployee(employee: UserDTO) {
      try {
        const createdUser = await userStore().createUser(employee);
        toast.success("Usuário criado com sucesso!");
      } catch (error) {
        toast.error("Erro ao criar usuário.");
        console.error(error);
      } finally {
        this.dialogOpen = false;
      }
    },

async editEmployee(employee: UserDTO) {
    try {
      await userStore().editUser(employee);
      toast.success("Usuário editado com sucesso!");
      this.editOpen = false;
      this.loadAllUsers();
    } catch (error) {
      toast.error("Erro ao editar usuário");
      console.error(error);
    }
  },

    toggleModal(flag: boolean) {
      this.dialogOpen = flag;
    },
    toggleEdit(user: UpdateUserDTO) {
      this.editedUser = user;
      this.editOpen = true;
    },
    openDeleteDialog(user: UserDTO) {
      this.userToDelete = user.id;
      this.toggleDelete = true;
    },

    async confirmDelete() {
      if (this.userToDelete) {
        await this.deleteUser(this.userToDelete);
        }
      this.toggleDelete = false;
    },

    async deleteUser(userId: string) {
      try {
        const store = userStore();
        await store.deleteUser(userId);
        console.log(userId)
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
