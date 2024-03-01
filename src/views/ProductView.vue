<template>
    <div class="product-view">
      <div v-if="product" class="product-item">
        <img :src="product.productUrl" alt="Product Image">
        <h3>{{ product.productName }}</h3>
        <p>R{{ product.amount }}</p>
        <p>{{ product.description }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
      <div v-else class="product-empty">
        <p>No product selected</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      productId: {
        type: String,
        required: true
      }
    },
    computed: {
      product() {
        return this.$store.state.products.find(product => product.id === this.productId);
      }
    },
    methods: {
      addToCart(product) {
        this.$store.commit('addToCart', product);
      }
    },
    mounted() {
      this.$store.dispatch('getProducts');
    }
  }
  </script>
  
  <style scoped>
  .product-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .product-item {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  
  .product-item img {
    max-width: 50%;
    height: auto;
  }
  
  .product-empty {
    text-align: center;
  }
  </style>