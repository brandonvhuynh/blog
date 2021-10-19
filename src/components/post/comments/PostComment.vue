<template>
  <div class="post-comment">
    <h3 class="post-comment__title">{{ comment.name }}</h3>
    <p class="post-comment__body">{{ comment.body }}</p>
  </div>
</template>

<script>
export default {
  name: "PostComment",
  props: {
    comment: {
      default: () => {},
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/_functions';
@import '~bootstrap/scss/_variables';

.post-comment {

  // .post-comment__title
  &__title {
    font-size: 18px;
    color: $indigo-900;
  }
}
</style>