<template>
  <ul v-if="posts.length" class="row justify-content-between p-0">
    <li
      v-for="post in posts"
      :key="post.id"
      class="col col-12 col-lg-3 my-2 mx-1"
    >
      <router-link
        v-if="post"
        :to="{
          name: 'Post',
          params: {
            id: post.id,
            userId: post.userId
          }
        }"
        class="text-decoration-none"
      >
        {{ post.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { ref } from '@vue/reactivity';
import  fetchBlogPosts from '../utilities/fetchBlogPosts'

export default {
  name: 'Home',
  setup() {
    /**
     * Stateful Variables
     */
    const posts = ref([]);

    /**
     * Get Posts Data
     * @function getPostsData
     * @returns sets posts to  fetchBLogPostsresponse
     */
    const getPostsData = async () => {
      try {
        posts.value = await fetchBlogPosts()
      } catch (error) {
        console.error(error);
      }
    }

    /**
     * Init
     */
    getPostsData();

    return {
      posts
    }
  }
}
</script>
