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
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col v-else>
                    <v-row>
                        <v-col cols="3">
                            <v-select
                            label="Selecione a marca"
                            item-title="marca"
                            item-value="id"
                            color="green-darken-3"
                            variant="outlined"
                            class="mb-5 hint-custom"
                            hint="*Obrigatório"
                            persistent-hint
                            :rules="[value => !!value || 'Selecione uma marca válida']"
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
                    />
                    
                </v-col>
                <v-col cols="3">
                            <v-select
                            label="Categoria do Produto"
                            item-title="categoria"
                            item-value="id"
                            color="green-darken-3"
                            variant="outlined"
                            class="mb-5 hint-custom"
                            hint="*Obrigatório"
                            persistent-hint
                            :rules="[value => !!value || 'Selecione uma categoria válida']"
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
                    />
                    
                </v-col>
                <v-col cols="3">
                    <v-text-field
                        color="green-darken-3"
                        label="Data de Validade"
                        variant="outlined"
                        class="hint-custom"
                        type="Date"
                        hint="*Obrigatório"
                        persistent-hint
                        :rules="[value => !!value || 'Selecione uma Data de Validade']"
                    />
                    
                </v-col>
                <v-col cols="3">
                    <v-text-field
                        color="green-darken-3"
                        type="number"
                        label="Valor de custo por unidade"
                        variant="outlined"
                        class="hint-custom"
                        maxlength="5"
                        hint="*Obrigatório"
                        persistent-hint
                        :rules="[value => !!value || 'Indique um valor válido']"
                    />
                    
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
                    />
                    
                </v-col>
                <v-col cols="3">
                            <v-select
                            label="Número do corredor"
                            item-title="nome"
                            item-value="id"
                            color="green-darken-3"
                            variant="outlined"
                            class="mb-5 hint-custom"
                            />
                        </v-col>
                        <v-col cols="3">
                            <v-select
                            label="Número da prateleira"
                            item-title="nome"
                            item-value="id"
                            color="green-darken-3"
                            variant="outlined"
                            class="mb-5 hint-custom"
                            />
                        </v-col>
            </v-row>
        
        </v-form>
    </v-card>
</template>

<script lang="ts">
export default {
    name: 'CreateProduct',
    data() {
        return {
            registrationMarca: 'cadastrar',
        };
    },
};
</script>

<style>
.hint-custom .v-messages__message {
    color: red;
    font-style: italic;
}
</style>
