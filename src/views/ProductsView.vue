<template>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.productUrl" alt="Product Image">
        <h3>{{ product.productName }}</h3>
        <p>R{{ product.amount }}</p>
      </div>
    </div>
  </template>

  <script>
  export default {
    computed: {
      products() { []
        return this.$store.state.products;
      }
    },
    mounted() {
      this.$store.dispatch('getProducts');
    }
  }
  </script>
  
  <style scoped>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 2 columns */
    grid-gap: 20px; /* Gap between items */
  }
  .product-item {
    border: 1px solid #ddd;
    padding: 10px;
  }  .product-item img {
    max-width: 50%;
    height: auto;
  }
  </style>
