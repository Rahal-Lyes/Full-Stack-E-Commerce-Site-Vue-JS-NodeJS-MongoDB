<template>
  <div class="container">
    <h1>Product Details</h1>
    <h2>{{ product.nom }}</h2>
    <img :src="product.photo" :alt="product.nom" />
    <p>{{ product.caracteristiques }}</p>
  </div>
</template>
<script>
import smartphones from "../fakeData.js";
export default {
  name: "ProductDetails",
  data() {
    return {
      products: smartphones,
    };
  },

  computed: {
    product() {
      return this.products.find(
        (product) => product.id === parseInt(this.$route.params.id)
      );
    },
  },
};
</script>

<style>
.container {
  padding: 20px;
  margin: 0 auto;
  text-align: center;
}
.container img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin: 20px 0;
}
.container h2 {
  color: rgb(0, 145, 255);
}
.container p {
  color: rgb(11, 22, 29);
  font: 1.5em sans-serif;
  line-height: 1.5;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: rgb(11, 22, 29);
}
</style>
