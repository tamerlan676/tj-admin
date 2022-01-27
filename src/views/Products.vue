<template>
    <div class="breadcrumbs">
        <router-link to="/"> Главная</router-link> / Товары
    </div>
    <h2>Товары</h2>
    <Search/>
    <Suspense>
        <ProductList/>
    </Suspense>
</template>

<script>
import Search from '../components/Search.vue'
import ProductList from '../components/ProductList.vue'
export default {
  components: { Search, ProductList }
}
</script>
