<template>
  <div class="ui secondary pointing menu">
  <a href="/" class="active item">
    Image Storage
  </a>
  <a class="item">
    Messages
  </a>
  <a class="item">
    Friends
  </a>
  <div v-if="isLoggedIn" class="right menu">
    <a class="ui item" @click="logout">
      Galleries
    </a>
    <a class="ui item" @click="logout">
      Upload
    </a>
    <a class="ui item" @click="logout">
      Logout
    </a>
  </div>
  <div v-else class="right menu">
    <a href="#" class="ui item" @click="login">
      Login
    </a>
  </div>
</div>

</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout']),


}
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>