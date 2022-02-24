<template>
  <main>
    <div class="post" v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
    <div>
      <h2 class="title">Comments</h2>
      <div class="container">
        <CommentCard
          v-for="comment in comments"
          :key="comment.id"
          v-bind="comment"
        />
      </div>
    </div>
  </main>
</template>

<script>
import CommentCard from "../components/CommentCard.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CommentCard,
  },
  computed: {
    ...mapGetters({
      getPostById: "getPostById",
      comments: "getComments",
    }),
    post() {
      return this.getPostById(this.$route.params.id);
    },
  },
  methods: {
    ...mapActions(["getAllComments"]),
  },
  mounted() {
    console.log(this.post);
    this.getAllComments(this.$route.params.id);
  },
};
</script>

<style scoped>
.container {
  display: grid;
  gap: 1rem;
}

.post {
  text-align: left;
}

.title {
  text-align: left;
  margin-top: 5rem;
}
</style>
