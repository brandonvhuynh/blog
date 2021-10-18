<template>
  <div v-if="post" class="post-content">
    <h1 v-if="post.title" class="post-content__title">
      {{ post.title }}
    </h1>
    <p v-if="post.body" class="post-content__body">
      {{ post.body }}
    </p>
  </div>
</template>

<script>
export default {
  name: "PostContent",
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
};
</script>
