<template>
        <div class="breadcrumbs">
        <router-link to="/"> Главная</router-link> / <router-link to="/"> Заказы</router-link> / Новый заказ
    </div>
    <header>
        <h2>Заказ</h2>
        <button>Сохранить</button>
    </header>
    <form @submit.prevent="sendData">
        <section class="wrapper">
            <div class="fields">
                <div class="field">
                    <label for="">ФИО</label>
                    <input class="input"  type="text">
                </div>
                <div class="field">
                    <label for="">email</label>
                    <input class="input"  type="text">
                </div>
                <div class="field">
                    <label for="">Телефон</label>
                    <input class="input"  type="text">
                </div>
                <div class="field">
                    <label for="">Способ доставки</label>
                    <input class="input"  type="text">
                </div>
               <div class="field-sm">
                    <div class="field">
                        <label for="">Стоимость покупок</label>
                        <input class="input" type="text" >
                    </div>
                    <div class="field">
                        <label for="">Стоимость доставки</label>
                        <input class="input" type="text" >
                    </div>
                </div>
               <div class="field-sm">
                    <div class="field">
                        <label for="">Оплата</label>
                        <input class="input" type="text" >
                    </div>
                </div>
                <div class="field">
                    <label for="">Адрес доставки</label>
                    <textarea></textarea>
                </div>
                <!-- <div class="product-list">
                    <h3>Заказанные товары</h3>
                    <div class="table">
                        <table>
                            <thead>
                                <tr>
                                    <td>Фото</td>
                                    <td>Название</td>
                                    <td>Артикул</td>
                                    <td>Размер</td>
                                    <td>Цена</td>
                                    <td>Количество</td>
                                    <td>Действия</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="good-img"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <img style="margin-right: 16px" :src="require(`@/assets/icons/edit-t.svg`)" alt="">
                                        <img :src="require(`@/assets/icons/del-t.svg`)" alt="">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> -->
            </div>
            <div class="switches">
                Изменить способ доставки
                <select name="" id="">
                    <option value="">-</option>
                    <option value="">СДЕК</option>
                    <option value="">Самовывоз</option>
                    <option value=""> DHL</option>
                </select>
            </div>
        </section>
    </form>

</template>

<script setup>

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
    .wrapper{
        padding: 16px 0;
        display: flex;
        justify-content: space-between;
        .fields{
            .field{
            margin-bottom: 32px;
            width: 400px;
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
            width: 400px;
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
            .good-img{
                width: 60px;
                height: 60px;
                object-fit: contain;
            }
        }
        .good-img{
            img{
                width: 60px;
                height: 60px;
                object-fit: cover;
                background-size: cover;
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
