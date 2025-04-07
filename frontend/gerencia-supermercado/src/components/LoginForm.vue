<template>
  <v-sheet class="rounded bg-indigo h-100 w-100 d-flex justify-end">
    <v-container class="pa-0 ma-0 " >
      <v-card class="bg-white px-6 py-10 h-100" >
      <v-form>
        <v-text-field
        class="mb-4"
        label="Email"
        placeholder="Digite o seu e-mail"
        density="comfortable"
        variant="outlined"
        ></v-text-field>

        <v-text-field
        class="mb-6"
        label="Password"
        placeholder="Digite a sua senha"
        density="comfortable"
        variant="outlined"
        type="password"
        ></v-text-field>

        <v-btn
        color="success"
        size="large"
        type="submit"
        variant="elevated"
        block
        >
        Entrar
        </v-btn>
      </v-form>
      </v-card>
    </v-container>
  </v-sheet>
</template>

<script>
</script>
