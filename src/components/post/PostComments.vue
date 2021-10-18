<template>
  <div>
    <h3>Comments:</h3>
    <ul v-if="comments" class="post-comments">
      <li
        v-for="comment in comments"
        :key="comment.id"
        class="post-comment"
      >
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostComments",
  props: {
    comments: {
      required: true,
      type: Array,
    },
  },
};
</script>
