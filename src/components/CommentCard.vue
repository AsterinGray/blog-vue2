<template>
  <div class="card">
    <p class="name">by {{ name }}</p>
    <span class="email">{{ email }}</span>
    <p class="content">{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: ["email", "body", "name"],
};
</script>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 0.5rem;
  text-decoration: none;
}

.name {
  font-weight: bold;
  margin: 0;
}

.email {
  color: gray;
  font-size: 0.8rem;
  margin: 0;
}

.content {
  margin: 0.5rem 0;
}
</style>
