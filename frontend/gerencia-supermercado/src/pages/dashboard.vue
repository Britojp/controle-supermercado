<template>
  <v-sheet class="bg-green-lighten-5 px-5 py-3 h-screen d-flex justify-center align-center">
    <v-card
      class="pa-4 d-flex flex-column bg-white"
      width="95%"
      height="95%"
      elevation="2"
      prepend-icon="mdi-monitor-dashboard"
      title="Dashboard Financeiro"
    >
      <div class="d-flex flex-wrap justify-center align-center">
        <Card title="Vendas Realizadas" colorBg="bg-green-darken-2" colorIcon="text-white" :price="320" informationMessage="Número total de vendas realizadas neste mês"/>
        <Card class="ma-3" title="Valor de Entrada" colorBg="bg-red-accent-2" colorIcon="text-white" :price="1000" informationMessage="Valor total de todas as mercadorias compradas"/>
        <Card class="ma-3" title="Produtos em Estoque" colorBg="bg-orange-darken-2" colorIcon="text-white" :price="1500" informationMessage="Quantidade atual de produtos em estoque"/>
        <Card class="ma-3" title="Saldo Total" colorBg="bg-blue-darken-2" colorIcon="text-white" :price="1000" informationMessage="Diferença entre o valor de saída e entrada"/>
      </div>

      <v-divider class="my-4"></v-divider>

      <div class="d-flex flex-column align-center flex-grow-1">
        <h3 class="text-subtitle-1 mb-3">Desempenho Mensal</h3>
        <div class="d-flex flex-wrap justify-center align-center">
          <BarChart class="ma-3" :labels="labels" :datasets="barChartDataCompras" style="width: 400px; height:300px;" />
          <BarChart class="ma-3" :labels="labels" :datasets="barChartDataVendas" style="width: 400px; height:300px;" />
          <BarChart class="ma-3" :labels="labels" :datasets="barChartDataLucro" style="width: 400px; height:300px;" />
        </div>
        <p class="text-caption mt-4">Gráficos demonstrativos das vendas, compras e lucros mensais ao longo do ano.</p>
      </div>

      <v-divider class="my-4"></v-divider>

 <div class="d-flex justify-center align-center flex-wrap">
        <router-link to="/produtos" class="ma-2">
          <v-btn color="grey-lighten-4" class="text-black" prepend-icon="mdi-package-variant-closed">
            Produtos
          </v-btn>
        </router-link>

        <router-link to="/transacoes" class="ma-2">
          <v-btn color="grey-lighten-4" class="text-black" prepend-icon="mdi-chart-bar">
            Transações
          </v-btn>
        </router-link>

        <router-link to="/todos-funcionarios" class="ma-2">
          <v-btn color="grey-lighten-4" class="text-black"  prepend-icon="mdi-account-group">
            Funcionários
          </v-btn>
        </router-link>

        <router-link to="/todos-fornecedores" class="ma-2">
          <v-btn color="grey-lighten-4" class="text-black" prepend-icon="mdi-truck">
            Fornecedores
          </v-btn>
        </router-link>

        <router-link to="/transacao" class="ma-2">
          <v-btn color="grey-lighten-4" class="text-black" prepend-icon="mdi-swap-horizontal">
            Transação
          </v-btn>
        </router-link>

        <router-link to="/configuracoes" class="ma-2">
          <v-btn color="grey-lighten-4" class="text-black"  prepend-icon="mdi-cog">
            Configurações
          </v-btn>
        </router-link>
      </div>

    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import BarChart from '@/components/BarChart.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'main',
  components: { BarChart, Card },

  data () {
    return {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
      barChartDataVendas: [
        {
          label: 'Vendas (R$)',
          backgroundColor: '#4caf50',
          data: [4000, 3500, 3000, 4200, 4600, 5000, 4800],
        },
      ],
      barChartDataCompras: [
        {
          label: 'Compras (R$)',
          backgroundColor: '#e53935',
          data: [2000, 2200, 1800, 2500, 2300, 2100, 2000],
        },
      ],
      barChartDataLucro: [
        {
          label: 'Lucro (R$)',
          backgroundColor: '#1e88e5',
          data: [2000, 1300, 1200, 1700, 2300, 2900, 2800],
        },
      ]
    }
  }
}
</script>
