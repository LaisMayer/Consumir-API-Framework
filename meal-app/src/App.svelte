<script>
  import SearchBar from "./components/SearchBar.svelte";
  import MealsList from "./components/MealsList.svelte";
  import { searchMealsByName, listCategories, getMealsByCategory } from "./services/mealApi.js";

  let meals = [];
  let categories = [];
  let selectedCategory = "";

  async function loadCategories() {
    categories = await listCategories();
  }

  async function search(name) {
    meals = await searchMealsByName(name);
  }

  async function filterByCategory(cat) {
    selectedCategory = cat;
    meals = await getMealsByCategory(cat);
  }

  loadCategories();
</script>

<h1>🍽️ Buscador de Receitas</h1>

<SearchBar onSearch={search} />

<h3>Filtrar por categoria:</h3>

<select bind:value={selectedCategory} on:change={() => filterByCategory(selectedCategory)}>
  <option value="">Selecione...</option>
  {#each categories as item}
    <option value={item.strCategory}>{item.strCategory}</option>
  {/each}
</select>

<MealsList {meals} />

<style>
  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
  }

  select {
    padding: 10px;
    margin-top: 12px;
    border-radius: 8px;
  }

  h3 {
    margin-top: 30px;
  }
</style>
