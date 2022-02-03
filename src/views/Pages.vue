<template>
<input type="text" v-model="searchQuery" />
<button @click="filterfoo">Фильтр</button>
<div v-for="item in data" :key="item" class="order">
    <div>{{ item.id }}</div>
    <div>{{ item.name }}</div>
    <div>{{ item.phone }}</div>
    <div>{{ item.status }}</div>
    <div>{{ item.price }}</div>
    <div>{{ item.sale }}</div>
</div>

</template>

<style lang="scss" scoped>
    .order{
        display: flex;
        width: 800px;
        justify-content: space-between;
        border-bottom: 1px solid grey;
        padding: 10px;
    }
</style>
<script>
import { ref, computed } from 'vue'

export default {
  setup () {
    const data = ref([
      {
        id: 1,
        name: 'Иван',
        phone: '89282838929',
        status: 'оплачен',
        price: 2000,
        sale: 10
      },
      {
        id: 2,
        name: 'Сергей',
        phone: '89282838929',
        status: 'заказан',
        price: 1500,
        sale: 20
      },
      {
        id: 3,
        name: 'Николай',
        phone: '89282838929',
        status: 'отправлен',
        price: 3000,
        sale: 15
      },
      {
        id: 4,
        name: 'Сергей',
        phone: '89282838929',
        status: 'заказан',
        price: 1500,
        sale: 20
      },
      {
        id: 5,
        name: 'Николай',
        phone: '89282838929',
        status: 'отправлен',
        price: 3000,
        sale: 15
      },
      {
        id: 6,
        name: 'Николай',
        phone: '89282838929',
        status: 'отправлен',
        price: 3000,
        sale: 15
      },
      {
        id: 7,
        name: 'Сергей',
        phone: '89282838929',
        status: 'заказан',
        price: 1500,
        sale: 20
      },
      {
        id: 8,
        name: 'Николай',
        phone: '89282838929',
        status: 'отправлен',
        price: 3000,
        sale: 15
      }

    ])
    const searchQuery = ref('')
    const searchResults = computed(() => {
      return data.value.filter((product) => product.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !== -1)
    })
    const filteredBySale = computed(() => {
      return data.value.filter((item) => item.sale > 15)
    })
    const filteredByPayed = computed(() => {
      return data.value.filter((item) => item.status === 'заказан')
    })
    function filterfoo () {
      data.value = filteredByPayed.value
    }
    return {
      data,
      searchQuery,
      searchResults,
      filteredBySale,
      filterfoo,
      filteredByPayed
    }
  }
}
</script>
