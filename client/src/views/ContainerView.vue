<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
