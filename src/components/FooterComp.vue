<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-item">Customer Care</div>
        <div class="footer-item">FAQ</div>
        <div class="footer-item">Shipping</div>
        <div class="footer-item">Returns</div>
        <div class="footer-item">Partners</div>
        <div class="footer-item">Sneak- Peak</div>
        <div class="footer-item">Immobiliare</div>
        <div class="footer-item">&copy; {{ currentYear }} Blog</div>
        <div class="footer-item">Work with us</div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    flex-wrap: wrap;
  }
  
  .footer-item {
    margin: 0.5rem;
    font-size: 0.8rem;
    flex: 1;
  }
  
  @media (max-width: 768px) {
    .footer-item {
      flex: 1 0 100%;
      margin: 0.5rem 0;
    }
  }
  </style>