<template>
  <div class="main">
    <aside>
      <h1 class="aside-title">TJ Admin</h1>
      <Navigation />
    </aside>
    <section class="content">
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
            <Categories :categories="goodItem.product_categories" :category_list="categoryList" @reset="resetCategories" @setNew="setNewCategory" @turnAdditionalCategoryBlock="turnAdditionalCategoryBlock" :newCategory="newCategory"  />
            <AdditionalCategory v-if="addCategoryBlock" :category_list="categoryList"  @setAdditionalCategory="setAdditionalCategory" :additionalCategory="additionalCategory" />
            <Brands :brand="goodItem.product_brand" :brand_list="brandList" @resetBrand="resetBrand" @setNewBrand="setNewBrand" :new_brand="newBrand" />
            <Sizes :sizes="goodItem.sizes" :sizeList="sizeList" @resetSizes="resetSizes" @setNewSizes="setNewSizes" :newSizes="newSizes" @delNewSize="delNewSize" />
            <Colors :colors="goodItem.colours" :color_list="colorList" :newColors="newColors" @resetColors="resetColors" @setNewColors="setNewColors" @delNewColor="delNewColor"/>
            <Material :material="goodItem.material" />
            <CreationDate :date="goodItem.creation_date" />
            <Prices :cur_price="goodItem.cur_price" :max_price="goodItem.max_price" />
            <Sale :sale="goodItem.sale_pct"/>
            <Seasons :season="goodItem.season"/>
            <Images :images="goodItem.images_files"/>
            <Description :description="goodItem.product_descr" />
            <ModelDescription :modelDescription="goodItem.model_descr" />
            <Care :care="goodItem.care" />
            <div v-if="goodItem.stock_rest" class="field-sm">
              <div class="field">
                <label for="">Остаток на складе</label>
                <input class="input"  type="text"  :value="goodItem.stock_rest">
              </div>
            </div>
          </div>
          <div class="switches">
            <div class="switch-item">
              <div class="title">Готов к публикации в ИМ</div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </section>
      </form>
    </section>
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
import ModelDescription from '../components/details/ModelDescription.vue'
import Material from '../components/details/Material.vue'
import Care from '../components/details/Care.vue'
import AdditionalCategory from '../components/details/AdditionalCategory.vue'
import Navigation from '../components/Navigation.vue'

export default {
  components: { Categories, Article, Brands, Sizes, Colors, CreationDate, Prices, Sale, Seasons, Images, Description, ModelDescription, Material, Care, AdditionalCategory, Navigation },
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
    const newColors = ref([])
    const newCategory = ref([])
    const additionalCategory = ref([])
    const newSizes = ref([])
    const newBrand = ref(null)
    const addCategoryBlock = ref(false)
    function setNewCategory (val) {
      newCategory.value = val
    }
    function setAdditionalCategory (val) {
      additionalCategory.value = val
    }
    function setNewSizes (val) {
      newSizes.value.push(val)
    }
    function delNewSize (val) {
      newSizes.value.splice(val, 1)
    }
    function delNewColor (val) {
      newColors.value.splice(val, 1)
    }
    function setNewBrand (val) {
      newBrand.value = val
    }
    function setNewColors (val) {
      newColors.value.push(val)
    }
    function resetBrand () {
      goodItem.value.product_brand = null
    }
    function resetSizes () {
      goodItem.value.sizes = null
    }
    function resetColors () {
      goodItem.value.colours = null
    }
    function deleteCurrentColor (id) {
      this.newColors.splice(id, 1)
    }
    function turnAdditionalCategoryBlock () {
      addCategoryBlock.value = !addCategoryBlock.value
      console.log(addCategoryBlock.value)
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
      newCategory,
      additionalCategory,
      addCategoryBlock,
      newSizes,
      setNewCategory,
      setAdditionalCategory,
      setNewSizes,
      setNewBrand,
      setNewColors,
      delNewSize,
      delNewColor,
      turnAdditionalCategoryBlock,
      newBrand,
      colorList,
      categoryList,
      sizeList,
      brandList,
      newColors,
      resetBrand,
      resetColors,
      resetSizes,
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
