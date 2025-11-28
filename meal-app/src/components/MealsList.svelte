<script>
  import MealCard from "./MealCard.svelte";
  export let meals = [];
</script>

<div class="grid">
  {#each meals as meal}
    <MealCard meal={meal} />
  {/each}
</div>

<style>
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin-top: 20px;
  }
</style>
