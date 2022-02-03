<template>
    <div class="breadcrumbs">
        <router-link to="/"> Главная</router-link> / <router-link to="/"> Товары</router-link> / Ботинки
    </div>
    <header>
        <h2>{{ $route.params.id }}</h2>
        <button>Сохранить</button>
    </header>
    <form>
        <section class="wrapper">
            <div class="fields">
                <div class="field">
                    <label for="">Артикул товара</label>
                    <input class="input" v-model="goodItem.name" type="text">
                </div>
                <div class="field">
                    <label for="">Категория</label>
                    <div class="category-name">{{ goodItem.prod_main_cat_name }}</div>
                </div>
                <div class="field">
                    <label for="">Брэнд</label>
                    <input class="input" type="text" :value="goodItem.brand">
                </div>
                <div class="field-sm">
                    <div class="field">
                        <label for="">Цена</label>
                        <input class="input" type="text" :value="goodItem.priceNew">
                    </div>
                    <div class="field">
                        <label for="">Старая цена</label>
                        <input class="input" type="text" :value="goodItem.priceOld">
                    </div>
                </div>
                <div class="field">
                    <label for="">Фото Товара</label>
                    <div class="images">
                        <div class="img"><img :src="goodItem.img"></div>
                    </div>
                </div>
                <div v-if="goodItem.desc" class="field">
                    <label for="">Описание товара</label>
                    <textarea :value="goodItem.desc"></textarea>
                </div>
            </div>
            <div class="switches">
                <div class="switch-item">
                    <div class="title">Выключить</div>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="switch-item">
                    <div class="title">Выключить</div>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="switch-item">
                    <div class="title">Выключить</div>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        </section>
    </form>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  setup () {
    const route = useRoute()
    axios.get('../data/goods.json').then(response => { goodItem.value = response.data.data.filter(item => item.id === +route.params.id)[0] })
    // function sendData () {
    //   axios.post('http://localhost:3000/data',
    //     { article: goodItem.value.name, desc: 'TestDesc' }).then(response => {})
    // }
    const goodItem = ref(null)
    return {
      goodItem
    }
  }
}
</script>

<style lang="scss" scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;
        padding: 16px 0;
        button{
            display: block;
            width: 200px;
            height: 40px;
            background: green;
            color: #fff;
            border-radius: 50px;
        }
    }
    .wrapper{
        padding: 16px 0;
        display: flex;
        justify-content: space-between;
        .fields{
            width: 400px;
                    .field{
            margin-bottom: 32px;
            label{
                display: block;
                font-weight: 500;
                margin-bottom: 10px;
                color: #6A7797;
                font-size: 20px;
            }
            .input{
                display: block;
                width: 100%;
                height: 50px;
                font-size: 18px;
                border: 1px solid #6A7797;
                border-radius: 10px;
                padding-left: 8px;
                font-weight: 500;
            }
            textarea{
                font-family: inherit;
                width: 500px;
                height: 170px;
                padding: 16px;
                font-weight: 500;
                font-size: 18px;
                border-radius: 10px;
            }
            .category-name{
                font-weight: 500;
                background: #e5e5e5;
                padding: 10px 15px;
                border-radius: 5px;
                width: fit-content;
            }
        }
        .field-sm{
            display: flex;
            justify-content: space-between;
            .field{
                width: 50%px;
                margin-right: 32px;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
        .images{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 10px;
            img{
                max-width: 200px;
            }
        }
        }
        .switches{
            .switch-item{
                display: flex;
                align-items: center;
                margin-bottom: 16px;
                .title{
                    margin-right: 16px;
                    color: #6A7797;
                    font-size: 20px;
                }
            }
        }
    }
</style>
