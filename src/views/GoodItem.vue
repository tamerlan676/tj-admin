<template>
  <div class="breadcrumbs">
    <router-link to="/"> Главная</router-link> / <router-link to="/"> Товары</router-link> / {{ goodItem.product_id }}
  </div>
  <header>
    <h2>{{ goodItem.product_class }}</h2>
    <button>Сохранить</button>
  </header>
  <form>
    <section class="wrapper">
      <div class="fields">
        <Article :product_name="goodItem.product_name"/>
        <Categories :categories="goodItem.product_categories" :category_list="categoryList" @reset="resetCategories" @setnew="setNewCategories" />
        <Brands :brand="goodItem.product_brand" :brand_list="brandList" />
        <Sizes :sizes="goodItem.sizes" />
        <Colors :colors="goodItem.colours" />
        <CreationDate :date="goodItem.creation_date" />
        <Prices :cur_price="goodItem.cur_price" :max_price="goodItem.max_price" />
        <Sale :sale="goodItem.sale_pct"/>
        <Seasons :season="goodItem.season"/>
        <Images :images="goodItem.images_files"/>
        <Description :description="goodItem.product_descr" />
        <div v-if="goodItem.stock_rest" class="field-sm">
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
      </div>
    </section>
  </form>
      <div class="popup">
      <h1>I am popup</h1>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Categories from '../components/details/Categories.vue'
import Article from '../components/details/Article.vue'
import Brands from '../components/details/Brands.vue'
import Sizes from '../components/details/Sizes.vue'
import Colors from '../components/details/Colors.vue'
import CreationDate from '../components/details/CreationDate.vue'
import Prices from '../components/details/Prices.vue'
import Sale from '../components/details/Sale.vue'
import Seasons from '../components/details/Seasons.vue'
import Images from '../components/details/Images.vue'
import Description from '../components/details/Description.vue'

export default {
  components: { Categories, Article, Brands, Sizes, Colors, CreationDate, Prices, Sale, Seasons, Images, Description },
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
    const goodItem = ref(null)
    const pageNumber = ref(route.params.page)
    const firstLevelCat = ref(null)
    const newCategories = ref(null)
    const secondLevelCat = ref('')
    const thirdLevelCat = ref('')
    const newColors = ref([])
    function resetCategories () {
      goodItem.value.product_categories = null
      console.log('Сброс категорий')
    }
    function setNewCategories (val) {
      console.log(val)
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
    function deleteCurrentColor (id) {
      this.newColors.splice(id, 1)
    }
    // const createdCategories = computed(() => `${mainCategory.value}` + `-${subCategory.value}` + `-${lastCategory.value}`)
    axios.get(`http://192.168.200.32:81/admin/api/v1/products/get/id/${+route.params.id}`).then(response => { goodItem.value = response.data.filter(item => item.product_id === +route.params.id)[0] })
    axios.get('http://192.168.200.32:81/api/gds/category').then(response => { categoryList.value = response.data })
    const categoryList = ref(null)
    axios.get('http://192.168.200.32:81/admin/api/v1/products/get/brands').then(response => { brandList.value = response.data })
    const brandList = ref(null)
    axios.get('http://192.168.200.32:81/admin/api/v1/products/get/sizes').then(response => { sizeList.value = response.data })
    const sizeList = ref(null)
    axios.get('http://192.168.200.32:81/admin/api/v1/products/get/colors').then(response => { colorList.value = response.data })
    const colorList = ref('')
    // function sendData () {
    //   axios.post('http://localhost:3000/data',
    //     { article: goodItem.value.name, desc: 'TestDesc' }).then(response => {})
    // }
    watch(goodItem, (currentValue, oldValue) => {
    })
    return {
      goodItem,
      deleteCurrentColor,
      resetCategories,
      newCategories,
      setNewCategories,
      addNewColor,
      colorList,
      categoryList,
      sizeList,
      brandList,
      firstLevelCat,
      secondLevelCat,
      thirdLevelCat,
      newColors,
      resetBrand,
      resetColors,
      pageNumber
    }
  }
}
</script>

<style lang="scss">
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
      .step-1 {
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
.popup{
  width: 500px;
  padding: 20px;
  background: #e5e5e5;
  position: absolute;
  top: -20%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  transition: .5s all;
  &.active{
    top: 40%
  }
}
</style>
