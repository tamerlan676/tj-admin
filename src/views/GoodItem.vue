<template>
  <div class="breadcrumbs">
    <router-link to="/"> Главная</router-link> / <router-link to="/"> Товары</router-link> / {{ goodItem.id }}
  </div>
  <header>
    <h2>{{ goodItem.product_class }}</h2>
    <button>Сохранить</button>
  </header>
  <form>
    <section class="wrapper">
      <div class="fields">
        <div class="field">
          <label for="">Артикул товара</label>
          <div class="category-name">{{ goodItem.name }}</div>
        </div>
        <div class="field">
          <label for="">Категория</label>
          <div v-if="goodItem.main_cat_4_product" class="category-name">{{ goodItem.main_cat_4_product }}</div>
          <div v-if="goodItem.main_cat_4_product" @click="resetCategories" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить категории</div>
          <div v-if="mainCategory" class="cat-1 category-name">{{ mainCategory }} <span @click="clearMainCat" class="del-cat">x</span></div>
          <div v-if="subCategory" class="cat-2 category-name">  {{ subCategory }} <span @click="clearSubCat" class="del-cat">x</span></div>
          <div v-if="lastCategory" class="cat-3 category-name">    {{ lastCategory }} <span @click="clearLastCat" class="del-cat">x</span></div>
          <div v-if="!goodItem.main_cat_4_product" class="categories-wrapper">
            <div class="categories" v-for="(item, id) in categoryList" :key="id">
              <div class="step-1">
                  <input :id="id" type="radio" :value="item.category_caption"  v-model="mainCategory"/>
                  <label class="small l1" :for="id">{{ item.category_caption }}</label>
              </div>
              <div class="step-2" style="padding-left: 20px" v-for="(item2, id) in item.children" :key="id+=1">
                  <div class="step-2-wrapper">
                  <input type="radio" :id="item2.category_caption"  :value="item2.category_caption"  v-model="subCategory">
                  <label class="small" :for="item2.category_caption" >{{ item2.category_caption }}</label>
                  </div>
                  <div class="step-3" style="padding-left: 20px" v-for="(item3, id) in item2.children" :key="id+=1">
                    <input  type="radio" :id="item3.category_caption" :value="item3.category_caption"  v-model="lastCategory">
                    <label :for="item3.category_caption" class="small">{{ item3.category_caption }}</label>
                  </div>
              </div>
              </div>
          </div>
            </div>
        <div class="field">
          <label for="">Брэнд</label>
          <div v-if="goodItem.brand" class="category-name">{{ goodItem.brand }}</div>
          <div v-if="goodItem.brand" @click="resetBrand" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить бренд</div>
          <select v-if="!goodItem.brand">
            <option v-for="(item, key) in brandList" :key="key" value="">{{ item.brand }}</option>
          </select>
        </div>
        <div class="field">
            <label for="">Цвета</label>
            <div v-for="color in goodItem.colours" :key="color" class="category-name">{{ color.colour }}</div>
            <div v-if="goodItem.colours" @click="resetColors" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить цвета</div>
            <div v-if="!goodItem.colours">
            <div class="category-name" v-for="(newcolor, id) in newColors" :key="id">{{ newcolor }} <span @click="deleteCurrentColor(id)" class="del-cat">x</span></div>
            <div class="color-wrapper" v-for="(colorItem, id) in colorList" :key="id">
              <input type="radio" :id="colorItem.colour" v-on:input="addNewColor(colorItem.colour)"  :value="colorItem.colour">
              <label class="small" :for="colorItem.colour">{{ colorItem.colour }}</label>
            </div>
            </div>
        </div>
        <div class="field">
          <label for="">Дата создания</label>
          <input readonly class="input" type="text" :value="goodItem.creation_date">
        </div>
        <div class="field-sm">
          <div class="field">
            <label for="">Цена</label>
            <input class="input" type="text" :value="goodItem.cur_price">
          </div>
          <div class="field" v-if="goodItem.max_price">
            <label for="">Старая цена</label>
            <input class="input" type="text"  :value="goodItem.max_price">
          </div>
        </div>
        <div class="field-sm" v-if="goodItem.sale_pct">
          <div class="field">
            <label for="">Размер скидки</label>
            <input class="input" type="text"  :value="goodItem.sale_pct">
          </div>
        </div>
        <div class="field-sm">
          <div class="field">
            <label for="">Сезон</label>
            <input class="input" type="text"  :value="goodItem.season">
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
        <div class="field-sm">
          <div class="field">
            <label for="">Остаток на складе</label>
            <input class="input"  type="text"  :value="goodItem.stock_rest">
          </div>
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
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  props: {
    id: {
      type: Number
    },
    page: {
      default: 1
    }
  },
  setup () {
    const route = useRoute()
    const goodItem = ref({})
    const pageNumber = ref(route.params.page)
    const mainCategory = ref('')
    const subCategory = ref('')
    const lastCategory = ref('')
    const newColors = ref([])
    function resetCategories () {
      goodItem.value.main_cat_4_product = ''
    }
    function addNewColor (color) {
      this.newColors.push(color)
    }
    function resetBrand () {
      goodItem.value.brand = ''
    }
    function resetColors () {
      goodItem.value.colours = null
    }
    function clearMainCat () {
      mainCategory.value = null
    }
    function clearSubCat () {
      subCategory.value = null
    }
    function clearLastCat () {
      lastCategory.value = null
    }
    function deleteCurrentColor (id) {
      this.newColors.splice(id, 1)
      console.log(id)
    }
    const createdCategories = computed(() => `${mainCategory.value}` + `-${subCategory.value}` + `-${lastCategory.value}`)
    axios.get('http://192.168.200.32:81/api/gds/category').then(response => { categoryList.value = response.data })
    const categoryList = ref(null)
    axios.get('http://192.168.200.32:81/admin/api/v1/products/get/brands').then(response => { brandList.value = response.data })
    const brandList = ref(null)
    axios.get('http://192.168.200.32:81/admin/api/v1/products/get/colors').then(response => { colorList.value = response.data })
    const colorList = ref('')
    axios.get(`http://192.168.200.32:81/admin/api/v1/products/get/page/${pageNumber.value}`).then(response => { goodItem.value = response.data.goods.filter(item => item.id === +route.params.id)[0] })
    // function sendData () {
    //   axios.post('http://localhost:3000/data',
    //     { article: goodItem.value.name, desc: 'TestDesc' }).then(response => {})
    // }
    watch(goodItem, (currentValue, oldValue) => {
      console.log(currentValue)
    })
    return {
      goodItem,
      clearMainCat,
      deleteCurrentColor,
      clearSubCat,
      clearLastCat,
      resetCategories,
      addNewColor,
      colorList,
      categoryList,
      brandList,
      mainCategory,
      subCategory,
      lastCategory,
      createdCategories,
      newColors,
      resetBrand,
      resetColors,
      pageNumber
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
      .step-1{
        display: flex;
      }
      .step-2-wrapper{
        display: flex;
      }
      .step-3{
        display: flex;
      }
      .small{
        font-size: 16px;
        cursor: pointer;
        &.l1{
          font-weight: bold;
        }
      }
      .color-wrapper{
        display: flex;
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
        margin-bottom: 8px;
      }
      .color-i{
        margin-bottom: 8px;}
      textarea{
        font-family: inherit;
        width: 500px;
        height: 170px;
        padding: 16px;
        font-weight: 500;
        font-size: 18px;
        border-radius: 10px;
      }
      select{
        width: 100%;
        height: 50px;
        padding: 0 5px;
        cursor: pointer;
        border-radius: 10px;
      }
      .category-name{
        font-weight: 500;
        background: #e5e5e5;
        padding: 10px 15px;
        border-radius: 5px;
        width: fit-content;
        margin-bottom: 8px;
      }
      .cat-2{
        margin-left: 20px;
      }
      .cat-3{
        margin-left: 40px;
      }
      .del-cat{
        color: red;
        font-weight: 500;
        cursor: pointer;
      }
      .change-categories{
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        cursor: pointer;
        img{
          margin-right: 5px;
        }
      }
    }
    .field-sm{
      display: flex;
      justify-content: space-between;
      .field{
        width: 50%;
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
