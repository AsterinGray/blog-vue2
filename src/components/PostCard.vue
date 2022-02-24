<template>
  <div>
    <router-link class="card" :to="{ path: `/post/${id}` }">
      <p class="title">{{ title }}</p>
      <p class="detail">{{ body }}</p>
      <span class="info">created by user {{ userId }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id", "userId", "title", "body"],
};
</script>

<style scoped>
.card {
  padding: 1rem 2rem;
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 0.5rem;
  text-decoration: none;
}

.title {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}

.detail {
  color: gray;
  margin: 0 0 0.5rem 0;
}

.info {
  color: darkgray;
  font-size: 12px;
  margin-top: auto;
}
</style>
