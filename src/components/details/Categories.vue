<template>
  <div class="field">
    <label for="">Категория</label>
    <div class="category-name" v-for="(category, id) in categories" :key="id">{{ category.cat_path }}</div>
    <div v-if="categories" @click="$emit('reset')" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить категории</div>
    <div v-if="!categories"  class="categories-wrapper">
      <div class="new-categories" >
        <div class="category-name" v-for="(c, id) in newCategory" :key="id">{{c.bc_caption}}</div>
      </div>
      <div v-if="newCategory.length > 0" @click="offBlock" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить категорию</div>
      <div v-if="newCategory.length > 0" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Добавить категорию</div>
      <div :class="{active: !isActive}" class="categories" v-for="(item, id) in category_list" :key="id">
        <div class="step-1">
          <input id="categoryChoice1" name="category" :value="item.breadcrumbs" v-if="!item.children" @change="offBlock" @input="$emit('setNew', $event.target._value )" type="radio">
          <label class="small l1">{{ item.category_caption }}</label>
        </div>
        <div style="padding-left:20px" v-for="(sub, id) in item.children" :key="id">
          <div class="step-2-wrapper">
            <input  id="categoryChoice2" name="category" :value="sub.breadcrumbs" v-if="!sub.children" @change="offBlock" @input="$emit('setNew', $event.target._value )" type="radio">
            <label class="small">{{ sub.category_caption }}</label>
          </div>
          <div class="step-3" style="padding-left:20px" v-for="(last, id) in sub.children" :key="id">
            <input  id="categoryChoice3" name="category" :value="last.breadcrumbs" v-if="!last.children" @change="offBlock" @input="$emit('setNew', $event.target._value )" type="radio">
            <label class="small">{{ last.category_caption }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
    category_list: Array,
    newCategory: Array
  },
  emits: ['reset', 'setNew'],
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    offBlock () {
      this.isActive = !this.isActive
      console.log('Меняю класс')
    }
  }
}
</script>

<style lang="scss">
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
      .category-name{
        font-weight: 500;
        background: #e5e5e5;
        padding: 10px 15px;
        border-radius: 5px;
        width: fit-content;
        margin-bottom: 8px;
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
.active{
  display: none
}
.new-categories{
  div{
    font-weight:500px;
    background: #e5e5e5;
    width: fit-content;
    padding:10px;
    margin-bottom: 10px;
      &:nth-child(2){
      margin-left: 20px
    }
      &:nth-child(3){
      margin-left: 30px
    }
  }

}
</style>
