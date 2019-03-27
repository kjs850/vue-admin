<template>
  <div id="app">
    <Header></Header>
    <p>
      <router-view></router-view>
    </p>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

