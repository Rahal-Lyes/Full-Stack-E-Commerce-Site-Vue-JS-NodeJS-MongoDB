<template>
  <div>
    <div class="card">
      <h2>{{ product.nom }}</h2>
      <img :src="product.photo" :alt="product.nom" />
      <router-link :to="`/product/${product.id}`">
        <button>View Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardView",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  padding: 20px;
  width: 250px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(192, 189, 189);
}

.card h2 {
  font-size: 25px;
  color: blue;
}
.card img {
  width: 230px;
  height: 250px;
  object-fit: contain;
}

.card button {
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
