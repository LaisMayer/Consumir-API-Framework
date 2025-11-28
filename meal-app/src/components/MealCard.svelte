<script>
  export let meal;
</script>

<div class="card">
  <img src={meal.strMealThumb} alt={meal.strMeal} />
  <h3>{meal.strMeal}</h3>
</div>

<style>
  .card {
    width: 250px;
    padding: 10px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    text-align: center;
  }

  img {
    width: 100%;
    border-radius: 12px;
  }

  h3 {
    font-size: 18px;
  }
</style>
