<template>
  <span title="你知道的太多了" class="text">
    <slot/>
  </span>
</template>

<style scoped>
.text {
  background-color: black;
  color: black;
}

.text:hover {
  color: white;
}
</style>