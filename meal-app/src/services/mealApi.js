export async function searchMealsByName(name) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await res.json();
    return data.meals || [];
  }
  
  export async function getMealsByCategory(category) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await res.json();
    return data.meals || [];
  }
  
  export async function listCategories() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    const data = await res.json();
    return data.meals || [];
  }
  