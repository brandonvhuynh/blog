<template>
  <ul class="row">
    <li v-for="post in posts" :key="post.id" class="col">
      <router-link :to="post.id">
        {{ post.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { ref } from '@vue/reactivity';
import  fetchBlogPosts from '../../utilities/fetchBlogPosts'

export default {
  name: 'BlogArchive',
  setup() {
    /**
     * Stateful Variables
     * - posts
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
