<script>
  export let value = "";
  export let onSearch;
</script>

<div class="search-container">
  <input
    type="text"
    placeholder="Buscar receita..."
    bind:value
    on:input={() => onSearch(value)}
  />
</div>

<style>
  .search-container input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
</style>
