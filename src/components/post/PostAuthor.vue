<template>
  <div class="author">
    <h4>Author</h4>
    <address v-if="author.address">
      <template v-if="author.address.street">
        {{ author.address.street }}
      </template>
      <br/>
      <template v-if="author.address.suite">
        {{ author.address.suite }}
        <br/>
      </template>
      <template v-if="author.address.city">
        {{ outputAddressCityZip }}
      </template>
    </address>
  </div>
</template>

<script>
export default {
  name: 'PostAuthor',
  props: {
    author: {
      type: Object,
      required: true
    }
  },
  computed: {
    /**
     * Output Address City and Zip
     * @function outputAddressCityZip
     * @returns city zipcode
     */
    outputAddressCityZip() {
      return `${this.author.address.city} ${this.author.address.zipcode}`;
    }
  }
}
</script>
