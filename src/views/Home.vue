<template>
    <div class="login">
      <img class="key" :src="require(`@/assets/icons/key.svg`)" alt="">
      <div class="login-block">
        <h2>Вход</h2>
        <p>Введите пожалуйста свои данные</p>
        <form action="">
          <div class="field">
            <input type="text" placeholder="Введите логин">
          </div>
          <div class="field">
          <input type="text" placeholder="Введите пароль">
          </div>
          <button>Войти</button>
        </form>
      </div>
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

<style lang="scss" scoped>

.login{
  background: #EEF3FB;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 .key{
   width: 80px;
   margin-bottom: 24px;
 }
  .login-block{
    background-color: #fff;
    padding: 40px;
    border-radius: 20px;
    width: fit-content;
    text-align: center;
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    h2{
      margin-bottom: 8px;
      font-size: 20px;
      color: #252C44
    }
    p{
      margin-bottom: 16px;
      color: #6A7797
    }
    .field{
      input{
        width: 100%;
        height: 35px;
        margin-bottom: 16px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #6A7797;
        padding-left: 8px;
        &:focus{
          outline: none;
        }
      }
    }
    button{
      width: 100%;
      padding: 10px 0;
      display: block;
      background: #7796E7;
      color: #fff;
      font-weight: 500;
      border-radius: 5px;
    }
  }
}
</style>
