<template>
  <main>
    <h1>Posts</h1>
    <div class="content">
      <PostCard v-for="(post, index) in posts" :key="index" v-bind="post" />
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    PostCard,
  },
  computed: {
    ...mapGetters({
      posts: "getPosts",
    }),
  },
  methods: {
    ...mapActions(["getAllPosts"]),
  },
  mounted() {
    this.getAllPosts();
  },
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
