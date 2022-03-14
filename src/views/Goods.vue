<template>
  <div class="breadcrumbs">
    <router-link to="/"> Главная</router-link> / Товары
  </div>
  <h2>Товары</h2>
  <div class="search-line">
    <input class="search" type="text" placeholder="Поиск по артиклу" v-model="searchQuery">
    <button class="filter"><img :src="require(`@/assets/icons/filter.svg`)">Фильтрация</button>
    <button class="addGood"><img :src="require(`@/assets/icons/plus.svg`)">Добавить товар</button>
  </div>
  <Loader v-if="loading"/>
  <div class="table">
    <table>
      <thead>
      <tr>
        <td>Фото</td>
        <td>Артикул</td>
        <td>Название</td>
        <td>Цена</td>
        <td>Количество</td>
        <td>Статус</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in goods" :key="item.id">
        <td><img class="good-img" :src="item.img"></td>
        <td><router-link :to="{ name: 'GoodItem', params: { id: item.id, page: pageNumber  }}">{{ item.name }}</router-link></td>
        <td>{{ item.product_class }}</td>
        <td>{{ item.cur_price }} ₽</td>
        <td class="actions">{{ item.stock_rest }} шт.</td>
        <td>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-if="!searchQuery" class="pagination">
    <div @click="prevPage" class="page">Предыдущая</div>
    <div @click="firstPage" class="page">Первая</div>
    <div v-if="pageNumber > 1" @click="pageNumber = pageMinusOne" class="page">{{ pageMinusOne }}</div>
    <div class="page active">{{ pageNumber }}</div>
    <div v-if="pageNumber < totalPages" @click="pageNumber = pagePlusOne" class="page">{{ pagePlusOne }}</div>
    <div @click="lastPage" class="page">Последняя</div>
    <div @click="nextPage" class="page">Следующая</div>
  </div>
</template>
<script>
import Loader from '../components/Loader.vue'
import { computed, ref, watch } from 'vue'
import axios from 'axios'

export default {
  components: {
    Loader
  },
  setup () {
    const goods = ref(null)
    const testFoo = (page) => { pageNumber.value = page }
    const loading = ref(true)
    const searchQuery = ref(null)
    const pageNumber = ref(1)
    const totalPages = ref(null)
    const pagePlusOne = computed(() => pageNumber.value + 1)
    const pageMinusOne = computed(() => pageNumber.value - 1)
    const prevPage = () => {
      if (pageNumber.value > 1) { return pageNumber.value-- }
    }
    const nextPage = () => {
      if (pageNumber.value < totalPages.value) { return pageNumber.value++ }
    }
    const firstPage = () => { pageNumber.value = 1 }
    const lastPage = () => { pageNumber.value = totalPages.value }
    watch(pageNumber, (currentValue, oldValue) => {
      axios.get('http://192.168.200.32:81/admin/api/v1/products/get/page/1').then(response => { totalPages.value = response.data.total_pages })
      axios.get(`http://192.168.200.32:81/admin/api/v1/products/get/page/${pageNumber.value}`).then(response => { goods.value = response.data.goods; loading.value = false })
    }, { immediate: true })
    watch(searchQuery, (currentValue, oldValue) => {
      if (searchQuery.value !== '') {
        axios.get(`http://192.168.200.32:81/admin/api/v1/products/search/p=1/q=${searchQuery.value}`).then(response => { goods.value = response.data.goods; loading.value = false })
      }
    })
    return {
      goods,
      testFoo,
      pageNumber,
      prevPage,
      nextPage,
      firstPage,
      lastPage,
      searchQuery,
      pagePlusOne,
      pageMinusOne,
      totalPages,
      loading
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
.table{
  margin-bottom: 24px;
  table{
    width: 100%;
    border-spacing: 0;
  }
  thead{
    background: #D8DDE9;
    padding: 16px 40px;
    text-align: left;
    width: 100%;
    height: 52px;
    font-weight: 500;
  }
  td{
    padding: 16px;
    max-width: 80px;
  }
  tbody{
    color: #6A7797;
    font-weight: 500;
    tr{
      background: #F6F7FA;
      .good-img{
        width: 60px;
        height: 60px;
        object-fit: contain;
      }
    }
    td{
      border-bottom: 3px solid #fff;
    }
    .actions a{
      margin-right: 16px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
}
.pagination{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .page{
    padding: 5px;
    border: 1px solid #DFDFE2;
    min-width: 20px;
    text-align: center;
    margin-right: 5px;
    font-size: 14px;
    color: #6A7797;
    margin-bottom: 5px;
    &:last-child{
      margin-right: 0;
    }
    &:hover{
      background: #F2F5FF;
      cursor:pointer
    }
    &.active{
      background: #F2F5FF;
    }
  }
}
</style>
