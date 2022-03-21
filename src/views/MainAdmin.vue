<template>
<h1>Admin <span>page</span>  </h1>
</template>

<style lang="scss" scoped>

</style>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const user = ref('')
    axios.post('http://192.168.200.32:8100/api/v1/auth/login',
      { user: 'tamerlan676@gmail.com', password: '12345six' }
    ).then(response => { user.value = response.data })
    return {
      user
    }
  }
}
</script>
