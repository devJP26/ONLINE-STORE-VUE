<template>
  <section class="product-list-container">
    <div v-for="(items, category) in groupedProducts" :key="category" class="each-category">
      <h2>{{ categoryTitleMap[category] }}</h2>
      <div class="product-list grid">
        <ProductCard v-for="product in items" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { computed } from 'vue';
import ProductCard from '../components/ProductCard.vue'
import Products from '../data/products.json'
export default {
  components: {
    ProductCard
  },
  setup() {
    const groupedProducts = computed(() => {
      const groups: Record<string, any[]> = {};
      Products.forEach(product => {
        if (!groups[product.category]) {
          groups[product.category] = [];
        }
        groups[product.category]!.push(product);
      });
      return groups;
    })
    const categoryTitleMap: Record<string, string> = {
      machine_roller: 'Rollers',
      machine_sorter: 'Optical Sorters',
      machine_dryer: 'Dryers',
      machine_die_casting: 'Die Casting Machines'
    }

    return {
      groupedProducts,
      categoryTitleMap
    }
  },
}
</script>
<style scoped>
.product-list-container {
  padding: 16px;
}
.each-category {
  margin-bottom: 32px;
}
.product-list-container h2{
 text-align: left;
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 18x;
  line-height: 1;
}
.product-list.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}
</style>