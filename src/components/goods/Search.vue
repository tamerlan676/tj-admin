<template>
  <div class="search-line">
    <input class="search" type="text" placeholder="Поиск по артиклу"  v-model="searchField" @input="$emit('changeSearchQuery', searchField)">
    <button  class="filter"><img :src="require(`@/assets/icons/filter.svg`)">Фильтрация</button>
    <button class="addGood"><img :src="require(`@/assets/icons/plus.svg`)">Добавить товар</button>
  </div>
</template>

<script>
export default {
  props: {
    tSearchQuery: String
  },
  emits: ['changeSearchQuery'],
  data () {
    return {
      searchField: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search-line{
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  margin-bottom: 40px;
  .search{
    border: 2px solid #6A7797;
    border-radius: 5px;
    margin-right: 16px;
    font-family: inherit;
    padding-left: 8px;
    height: 42px;
  }
  button{
    display: block;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 10px 24px;
    border-radius: 50px;
    cursor: pointer;
    font-family: inherit;
    img{
      margin-right: 8px;
    }
  }
  .filter{
    background: #7796E7;
    margin-right: 16px;
  }
  .addGood{
    background: #5DBA6C;
  }
}
</style>
