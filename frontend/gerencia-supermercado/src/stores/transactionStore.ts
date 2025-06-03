import type { CreateTransactionDTO, TransactionDTO } from "@/dto/transaction.dto";
import * as api from "@/services/api";
import { defineStore } from "pinia";

export const transactionStore = defineStore('transactionStore', {
  state: () => ({
    allTransactions: [] as TransactionDTO[],
    loading: false,
  }),
  actions: {
    async fetchTransactions() {
        this.loading = true;
        try {
            const response = await api.getAllTransactions();
            this.allTransactions = response;
        } catch (error) {
            console.error('Erro ao buscar transações:', error);
        }
        this.loading = false;
    },

    async createTransaction(transactionData: CreateTransactionDTO): Promise<TransactionDTO> {
        try {
            const createdTransaction = await api.createNewTransaction(transactionData);
            this.allTransactions.push(createdTransaction);
            return createdTransaction;
        }
        catch (error) {
            console.error('Erro ao criar transação:', error);
            throw error;
        }
    }
},
  persist: true
});
