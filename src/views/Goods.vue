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
    <div class="table">
        <table>
            <thead>
                <tr>
                    <td>Фото</td>
                    <td>Артикул</td>
                    <td>Название</td>
                    <td>Категория</td>
                    <td>Цена</td>
                    <td>Действия</td>
                    <td>Статус</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in currentPage" :key="item.id">
                    <td><img class="good-img" :src="item.img"></td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.product_subgroup }}</td>
                    <td>{{ item.prod_main_cat_name }}</td>
                    <td>{{ item.priceNew }} ₽</td>
                    <td class="actions">
                        <router-link :to="{ name: 'GoodItem', params: { id: item.id  }}"><img :src="require(`@/assets/icons/edit-t.svg`)"></router-link>
                        <router-link :to="{ name: 'GoodItem', params: { id: item.id  }}"><img :src="require(`@/assets/icons/browse-t.svg`)"></router-link>
                        <router-link :to="{ name: 'GoodItem', params: { id: item.id  }}"><img :src="require(`@/assets/icons/del-t.svg`)"></router-link>
                        </td>
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
    <div class="pagination">
        <div class="page" :class="{'active' : page == pageNumber}"  v-for="page in pages" :key="page" @click="testFoo(page)">{{ page }}</div>
    </div>
</template>
<script>
import { ref, computed } from 'vue'
import axios from 'axios'

export default {
  setup () {
    axios.get('http://192.168.200.32:81/admin/api/v1/get_goods').then(response => { goods.value = response.data })
    const goods = ref(null)
    const searchQuery = ref('')
    const searchResults = computed(() => {
      return goods.value.filter((product) => product.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !== -1)
    })
    const goodsPerPage = ref(30)
    const pageNumber = ref(1)
    const pages = computed(() => {
      return Math.ceil(searchResults.value.length / 30)
    })
    const currentPage = computed(() => {
      const from = (pageNumber.value - 1) * goodsPerPage.value
      const to = from + goodsPerPage.value
      return searchResults.value.slice(from, to)
    })
    const pageCLick = (page) => {
      return page
    }
    const testFoo = (page) => {
      pageNumber.value = page
      return pageNumber
    }
    return {
      goods,
      searchQuery,
      goodsPerPage,
      pages,
      testFoo,
      pageCLick,
      pageNumber,
      currentPage,
      searchResults
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
    .page{
        padding: 5px;
        border: 1px solid #DFDFE2;
        width: 20px;
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
