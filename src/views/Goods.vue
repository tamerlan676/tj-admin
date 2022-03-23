<template>
   <div class="main">
    <aside>
      <h1 class="aside-title">TJ Admin</h1>
      <Navigation />
    </aside>
    <section class="content">
  <h2 class="aside-title">Товары</h2>
  <Search @changeSearchQuery="changeSearcQuery" />
  <Loader v-if="loading"/>
  <Table :goods="goods" />
  <Pagination :pageNumber="pageNumber" :totalPages="totalPages" :pagePlusOne="pagePlusOne" :pageMinusOne="pageMinusOne" @prevPage="prevPage" @firstPage="firstPage" :searchQuery="searchQuery" @nextPage="nextPage" @lastPage="lastPage" />
    </section>
  </div>
</template>
<script>
import Loader from '../components/Loader.vue'
import Navigation from '../components/Navigation.vue'
import Search from '../components/goods/Search.vue'
import { computed, ref, watch } from 'vue'
import axios from 'axios'
import Table from '../components/goods/Table.vue'
import Pagination from '../components/goods/Pagination.vue'

export default {
  components: {
    Loader,
    Navigation,
    Search,
    Table,
    Pagination
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
    function changeSearcQuery (val) {
      searchQuery.value = val
    }
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
      changeSearcQuery,
      pagePlusOne,
      pageMinusOne,
      totalPages,
      loading
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
