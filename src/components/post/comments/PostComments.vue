<template>
  <div>
    <h3>Comments:</h3>
    <ul v-if="comments" class="post-comments">
      <li
        v-for="comment in comments"
        :key="comment.id"
        class="post-comment"
      >
        <post-comment :comment="comment" />
      </li>
    </ul>
  </div>
</template>

<script>
import PostComment from './PostComment.vue'
export default {
  name: "PostComments",
  components: {
    PostComment,
  },
  props: {
    comments: {
      required: true,
      type: Array,
    },
  },
};
</script>
