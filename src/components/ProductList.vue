<template>
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
                <tr v-for="item in products" :key="item.id">
                    <td><img class="product-img" :src="item.img"></td>
                    <td>{{ item.name }}</td>
                    <td>Зимние мужские ботинки...</td>
                    <td>{{ item.prod_main_cat_name }}</td>
                    <td>{{ item.priceNew }} ₽</td>
                    <td class="actions">
                        <router-link :to="{ name: 'product', params: { id: item.id  }}"><img :src="require(`@/assets/icons/edit-t.svg`)"></router-link>
                        <router-link to="#"><img :src="require(`@/assets/icons/browse-t.svg`)"></router-link>
                        <router-link to="#"><img :src="require(`@/assets/icons/del-t.svg`)"></router-link>
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
import { useProducts } from '../use/products'
export default {
  async setup () {
    const { products } = await useProducts()
    return { products }
  }
}
</script>

<style lang="scss" scoped>
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
            .product-img{
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
