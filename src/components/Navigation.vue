<template>
      <div class="nav">
        <router-link class="link" :isActive="active" to="/"><img :src="require(`@/assets/icons/home-link.svg`)" alt="">Главная</router-link>
        <router-link class="link" :isActive="active" to="/categories"><img :src="require(`@/assets/icons/cat-link.svg`)" alt="">Категории</router-link>
        <router-link class="link" :isActive="active" to="/goods"><img :src="require(`@/assets/icons/goods-link.svg`)" alt="">Товары</router-link>
        <router-link class="link" :isActive="active" to="/orders"><img :src="require(`@/assets/icons/orders-link.svg`)" alt="">Заказы</router-link>
        <router-link class="link" :isActive="active" to="/pages"><img :src="require(`@/assets/icons/pages-link.svg`)" alt="">Страницы</router-link>
        <router-link class="link" :isActive="active" to="/users"><img :src="require(`@/assets/icons/users-link.svg`)" alt="">Пользователи</router-link>
        <router-link class="link" :isActive="active" to="/settings"><img :src="require(`@/assets/icons/settings-link.svg`)" alt="">Настройки</router-link>
      </div>
</template>

<style lang="scss" scoped>
.link{
  display: flex;
  align-items: center;
  font-size: 20px;
  width: 100%;
  text-decoration: none;
  color: #6A7797;
  margin-bottom: 16px;
  font-weight: 500;
  padding: 5px;
  transition: all .5s ease;
  border-radius: 10px;
  img{
    margin-right: 16px;
  }
  &:hover{
    background: #7796E7;
    color: white;
    padding: 5px;
  }
  &.router-link-active{
    background: #7796E7;
    color: white;
    padding: 5px;
    border-radius: 10px;
  }
}
</style>
