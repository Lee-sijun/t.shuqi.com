<template>
  <div class="home">
    <h1>这个是首页</h1>
    <button @click="goCategory(2,'1568016468','1568016468702')">男频</button>
    <button @click="goCategory(3,'1568016564','1568016564741')">女频</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  methods: {
    goCategory (pageId, timestamps, a) {
      if (pageId === 2) {
        this.$router.push({ path: '/male/' + pageId + '/' + timestamps + '/' + a })
      } else if (pageId === 3) {
        this.$router.push({ path: '/female/' + pageId + '/' + timestamps + '/' + a })
      }
    }

  }
}
</script>
