<template>
    <div>
      <h1>Product Management</h1>
      <button @click="addProduct" class="btn btn-primary">Add Product</button>
      <ul>
        <li v-for="product in products" :key="product.id">{{ product.name }} (<button @click="deleteProduct(product.id)">Delete</button>)</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
      };
    },
    async created() {
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      this.products = data;
    },
    methods: {
      addProduct() {
        const newProduct = {
          id: Date.now(),
          name: 'New Product',
        };
        this.products.push(newProduct);
        fetch('https://api.example.com/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        });
      },
      async deleteProduct(id) {
        this.products = this.products.filter((product) => product.id !== id);
        await fetch(`https://api.example.com/products/${id}`, {
          method: 'DELETE',
        });
      },
    },
  };
  </script>