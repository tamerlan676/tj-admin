<template>
    <div class="breadcrumbs">
        <router-link to="/"> Главная</router-link> / <router-link to="/"> Товары</router-link> / Ботинки
    </div>
    <header>
        <h2>Мужские зимние ботинки</h2>
        <button>Сохранить</button>
    </header>
    <section class="wrapper">
        <div class="fields">
            <div class="field">
                <label for="">Название поля</label>
                <input class="input" type="text" value="Значение поля">
            </div>
            <div class="field">
                <label for="">Название поля</label>
                <input class="input" type="text" value="Значение поля">
            </div>
            <div class="field">
                <label for="">Название поля</label>
                <input class="input" type="text" value="Значение поля">
            </div>
            <div class="field-sm">
                <div class="field">
                    <label for="">Название поля</label>
                    <input class="input" type="text" value="Значение поля">
                </div>
                <div class="field">
                    <label for="">Название поля</label>
                    <input class="input" type="text" value="Значение поля">
                </div>
            </div>
            <div class="field-sm">
                <div class="field">
                    <label for="">Название поля</label>
                    <input class="input" type="text" value="Значение поля">
                </div>
                <div class="field">
                    <label for="">Название поля</label>
                    <input class="input" type="text" value="Значение поля">
                </div>
            </div>
            <div class="field">
                <label for="">Фото Товара</label>
                <div class="images">
                    <div class="img"><img :src="require(`@/assets/icons/foto.png`)"></div>
                    <div class="img"><img :src="require(`@/assets/icons/foto.png`)"></div>
                    <div class="img"><img :src="require(`@/assets/icons/foto.png`)"></div>
                    <div class="img"><img :src="require(`@/assets/icons/foto.png`)"></div>
                    <div class="img"><img :src="require(`@/assets/icons/foto.png`)"></div>
                    <div class="img"><img :src="require(`@/assets/icons/foto.png`)"></div>
                </div>
            </div>
            <div class="field">
                <label for="">Описание товара</label>
                <textarea value="Черные ботинки с модным квадратным носом станут удачным выбором для холодной погоды. Для создания модели на плоской шнуровке выбрали кожу с естественным тиснением. Эластичная стеганая вставка в области щиколотки снижает давление на нее, а шнуровка дарит комфортную посадку. "></textarea>
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
</template>

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
