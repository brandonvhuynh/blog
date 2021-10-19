<template>
  <div class="post">
    <div v-if="loading">Loading...</div>
    <div v-else class="post__wrapper">
      <post-content v-if="data.post" :post="data.post" />
      <post-comments v-if="data.comments" :comments="data.comments" />
      <post-author v-if="data.author" :author="data.author" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import fetchBlogPost from "../utilities/fetchBlogPost";
import fetchBlogPostAuthor from "../utilities/fetchBlogPostAuthor";
import fetchBlogPostComments from "../utilities/fetchBlogPostComments";
import PostAuthor from "../components/post/PostAuthor.vue";
import PostComments from "../components/post/comments/PostComments.vue";
import PostContent from "../components/post/PostContent.vue";

export default {
  name: "Post",
  setup() {
    /**
     * Router dependencies
     */
    const route = useRoute();

    /**
     * Stateful Variables
     */
    const data = ref({});
    const loading = ref(true);

    /**
     * Get Post Data
     * @function getPostData
     * @description sets post data to state
     * @returns post, author, and comments
     */
    const getPostData = async () => {
      try {
        loading.value = true;

        const postResponse = await fetchBlogPost(route.params.id);
        const authorResponse = await fetchBlogPostAuthor(postResponse.userId);
        const commentsResponse = await fetchBlogPostComments(route.params.id);

        data.value.post = postResponse;
        data.value.author = authorResponse;
        data.value.comments = commentsResponse;

        loading.value = false;
      } catch (error) {
        console.error(error);
      }
    };

    /**
     * Init
     */
    getPostData();

    return {
      data,
    };
  },
  components: {
    PostAuthor,
    PostContent,
    PostComments,
  },
};
</script>
