<template>
    <div class="breadcrumbs">
        <router-link to="/"> Главная</router-link> / Заказы
    </div>
    <h2>Заказы</h2>
    <div class="search-line">
        <input class="input" type="text" placeholder="Поиск номеру заказа"  v-model="numberQuery">
        <input class="input" type="text" placeholder="Поиск по имени" v-model="nameQuery">
        <input class="input" type="text" placeholder="Поиск по телефону" v-model="phoneQuery">
        <input class="input" type="text" placeholder="Поиск по email" v-model="emailQuery">
        <div class="cr-button"><router-link class="cr-btn" to="/order">Создать заказ</router-link></div>
            <!-- <button class="filter"><img :src="require(`@/assets/icons/filter.svg`)">Фильтрация</button>
            <button class="addGood"><img :src="require(`@/assets/icons/plus.svg`)">Добавить товар</button> -->
    </div>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <td>№ Заказа</td>
                    <td>Покупатель</td>
                    <td>email</td>
                    <td>Телефон</td>
                    <td>Статус</td>
                    <td>Стоимость</td>
                    <td>Дата создания</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in searchedResult" :key="item.id">
                    <td><router-link :to="{ name: 'OrderDetails', params: { id: item.id, number: item.orderNumber  }}">{{ item.orderNumber }}</router-link></td>
                    <td>{{ item.userName }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.orderStatus }}</td>
                    <td>{{ item.totalPrice }} ₽</td>
                    <td>{{ item.createDate }}</td>
                </tr>
            </tbody>
</table>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const orders = ref(null)
    axios.get('../data/orders.json').then(response => { orders.value = response.data })
    const numberQuery = ref('')
    const nameQuery = ref('')
    const phoneQuery = ref('')
    const emailQuery = ref('')
    const searchedResult = computed(() => {
      if (numberQuery.value !== '') {
        return orders.value.filter((product) => product.orderNumber.toLowerCase().indexOf(numberQuery.value.toLowerCase()) !== -1)
      } else if (nameQuery.value !== '') {
        return orders.value.filter((product) => product.userName.toLowerCase().indexOf(nameQuery.value.toLowerCase()) !== -1)
      } else if (phoneQuery.value !== '') {
        return orders.value.filter((product) => product.phone.toLowerCase().indexOf(phoneQuery.value.toLowerCase()) !== -1)
      } else if (emailQuery.value !== '') {
        return orders.value.filter((product) => product.email.toLowerCase().indexOf(emailQuery.value.toLowerCase()) !== -1)
      } else { return orders.value }
    })
    return {
      orders,
      numberQuery,
      searchedResult,
      nameQuery,
      phoneQuery,
      emailQuery
    }
  }
}
</script>

<style lang="scss" scoped>
.search-line{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-bottom: 40px;
    .input{
        border: 2px solid #6A7797;
        border-radius: 5px;
        margin-right: 16px;
        font-family: inherit;
        padding-left: 8px;
        height: 42px;
    }
    .cr-button{
        .cr-btn{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            border-radius: 30px;
            color: #fff;
            text-decoration: none;
            background: #5DBA6C;
            text-transform: uppercase;
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
</style>
