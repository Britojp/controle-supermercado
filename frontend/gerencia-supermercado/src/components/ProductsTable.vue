<template>
 <div class="d-flex flex-column bg-white rounded-xl elevation-1 pa-4" style="height: 100%;">
    <div class="d-flex justify-space-between mb-4">

      <v-text-field
        v-model="search"
        density="compact"
        label="Pesquisar"
        placeholder="Digite algo..."
        prepend-inner-icon="mdi-magnify"
        clearable
        variant="outlined"
        bg-color="grey-lighten-4"
        class="search-field"
      />
    </div>

    <v-data-table
    class="bg-white"
    :headers="headers"
    :items="movies"
    item-value="title"
    hide-default-footer
    show-expand
    style="overflow-y: auto;"
  >
    <template
    v-slot:item.data-table-expand="{ internalItem, isExpanded, toggleExpand }">
      <v-btn
        :append-icon="isExpanded(internalItem) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        :text="isExpanded(internalItem) ? 'Fechar' : 'Mais informações'"
        class="text-none bg-grey-lighten-2"
        color="black"
        size="small"
        variant="text"
        border
        slim
        @click="toggleExpand(internalItem)"
      ></v-btn>
    </template>

    <template
    v-slot:expanded-row="{ columns, item }">
      <tr>
        <td :colspan="columns.length" class="py-2">
          <v-sheet rounded="lg" border>
            <v-table density="compact" class="bg-white">
              <tbody class="bg-surface-light bg-white">
                <tr>
                  <th>Rating</th>
                  <th>Synopsis</th>
                  <th>Cast</th>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>
                    <v-rating
                      :model-value="item.details.rating"
                      color="orange-darken-2"
                      density="comfortable"
                      size="x-small"
                      half-increments
                      readonly
                    ></v-rating>
                  </td>
                  <td>{{ item.details.synopsis }}</td>
                  <td>{{ item.details.cast.join(', ') }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-sheet>
        </td>
      </tr>
    </template>
  </v-data-table>

</div>
</template>
<script lang="ts">
import type { CategoriesDTO } from '@/dto/categories.dto';
import { categoriesStore } from '@/stores/categoriesStore';

  export default {
    name: 'ProductsTable',
    data() {
      return {
        allCategories: [] as CategoriesDTO[],
    headers : [
    { title: 'Title', key: 'title', align: 'start', sortable: true },
    { title: 'Director', key: 'director' },
    { title: 'Genre', key: 'genre' },
    { title: 'Year', key: 'year', align: 'end' },
    { title: 'Runtime(min)', key: 'runtime', align: 'end' },
  ],

  movies : [
    {
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      genre: 'Drama',
      year: 1994,
      runtime: 142,
      details: {
        synopsis: 'Two imprisoned men bond over years, finding solace and redemption through acts of decency.',
        cast: ['Tim Robbins', 'Morgan Freeman'],
        rating: 3.5,
      },
    },
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Sci-Fi',
      year: 2010,
      runtime: 148,
      details: {
        synopsis: 'A thief with the ability to enter dreams is tasked with stealing a secret from the subconscious.',
        cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
        rating: 5,
      },
    },
    {
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      genre: 'Crime',
      year: 1972,
      runtime: 175,
      details: {
        synopsis: 'The aging patriarch of a crime dynasty transfers control to his reluctant son.',
        cast: ['Marlon Brando', 'Al Pacino'],
        rating: 4.5,
      },
    },
    {
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      genre: 'Crime',
      year: 1994,
      runtime: 154,
      details: {
        synopsis: 'Interwoven stories of criminals, violence, and redemption in Los Angeles.',
        cast: ['John Travolta', 'Samuel L. Jackson'],
        rating: 4.5,
      },
    },
    {
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      genre: 'Action',
      year: 2008,
      runtime: 152,
      details: {
        synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        cast: ['Christian Bale', 'Heath Ledger'],
        rating: 4,
      },
    },
  ]
      }
    },
  methods:{
    async loadAllCategories(){
      try{
        const store = categoriesStore();
        await store.fetchCategories();
        this.allCategories = store.allCategories;
      } catch (e) {
        console.error(e);
      }
    },
  }
}

</script>
