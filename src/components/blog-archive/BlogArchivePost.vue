<template>
  <div class="blog-archive-post border p-3 text-center">
    <router-link
      v-if="post"
      :to="{
        name: 'Post',
        params: {
          id: post.id,
          userId: post.userId,
        },
      }"
      class="text-decoration-none"
    >
      {{ post.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BlogArchivePost",
  props: {
    post: {
      default: () => {},
      required: true,
      type: Object,
    },
  },
};
</script>
