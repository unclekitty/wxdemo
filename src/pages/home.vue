<template>
  <div class="wrapper" @click="update">
    <text class="title">Hello {{target}}</text>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        target: 'Vue'
      }
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
</style>