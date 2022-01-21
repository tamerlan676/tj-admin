<template>
    <div class="breadcrumbs">
        <router-link to="/"> Главная</router-link> / Товары
    </div>
    <h2>Товары</h2>
    <div class="search-line">
        <input class="search" type="text" placeholder="Поиск по артиклу">
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
                <tr v-for="item in 10" :key="item">
                    <td><img :src="require(`@/assets/icons/img.png`)"></td>
                    <td>GK 7522711 BLI</td>
                    <td>Зимние мужские ботинки...</td>
                    <td>Ботинки</td>
                    <td>23 000 р</td>
                    <td class="actions">
                        <img :src="require(`@/assets/icons/edit-t.svg`)">
                        <img :src="require(`@/assets/icons/browse-t.svg`)">
                        <img :src="require(`@/assets/icons/del-t.svg`)">
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
</template>

<script>
export default {
  name: 'myStore',
  data () {
    return {
      msg: 'Welcome to my Vuex Store'
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  mounted () {
    this.$store.dispatch('getPosts')
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
    }
    tbody{
        color: #6A7797;
        font-weight: 500;
        tr{
            background: #F6F7FA;
        }
        td{
            border-bottom: 3px solid #fff;
        }
        .actions img{
            margin-right: 16px;
            &:last-child{
                margin-right: 0;
            }
        }
    }
}
</style>
