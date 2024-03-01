<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">KitsKonnect
        <router-link class="navbar-brand" to="/">
          <img src="https://i.postimg.cc/63Z2g1J3/pngtree-jumping-shot-soccer-silhouette-png-image-926796-removebg-preview.png" alt="Logo"
            height="50" href key="../views/HomeView.vue">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
  
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="../views/AboutView.vue">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="../views/ProductsView.vue">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="../views/ContactView.vue">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="../views/AdminView.vue">Admin</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  
  
  
  export default {
      //name: 'NavbarComp'
  }
  </script>
  
  <style scoped>
  .navbar-brand {
      justify-content: space-between;
  }
  
  .navbar-nav {
      gap: 20px;
  }
  
  .form-control {
      width: 50%;
  }
  
  @media (max-width: 767.98px) {
      .navbar-nav {
          flex-direction: column;
      }
  
      .nav-item {
          margin: 5px 0;
      }
  
      .form-control {
          width: 100%;
      }
  }
  </style>