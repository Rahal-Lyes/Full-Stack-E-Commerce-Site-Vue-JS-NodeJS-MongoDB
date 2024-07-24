<template>
  <div class="nav">
    <router-link :to="{ name: 'ProductsPage' }">All Products</router-link>
  </div>
</template>

<style scoped>
.nav {
  width: 100%;
  height: 70px;
  background-color: #504f4f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  position: fixed;
  text-decoration: none;
}
.nav a {
  color: white;
  text-decoration: none;
}
</style>
