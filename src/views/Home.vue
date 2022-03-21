<template>
  <div class="about">
    <h1>Home</h1>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  setup () {
    const user = ref(null)
    axios.post('http://192.168.200.32:8100/api/v1/auth/login/', {
      username: 'tamerlan676@gmail.com',
      password: '12345six'
    })
    return {
      user
    }
  }
}
</script>
