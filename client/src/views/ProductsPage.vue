<template>
  <div class="products">
    <div class="fixed"></div>
    <h1>All Products</h1>
    <container-view>
      <card-view
        v-for="product in products"
        :key="product"
        :product="product"
      />
    </container-view>
  </div>
</template>

<script>
import smartphones from "../fakeData.js";
import CardView from "../components/CardView.vue";
import ContainerView from "./ContainerView.vue"; // Corrigez le chemin si nécessaire

export default {
  name: "ProductsPage",
  components: {
    CardView,
    ContainerView,
  },

  data() {
    return {
      products: smartphones,
    };
  },
};
</script>

<style scoped>
.products {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.fixed {
  height: 60px;
}
</style>
