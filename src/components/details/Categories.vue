<template>
  <div class="field">
    <label for="">Категория</label>
    <div class="category-name" v-for="(category, id) in categories" :key="id">{{ category.cat_path }}</div>
    <div v-if="categories" @click="$emit('reset' ,$event)" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить категории</div>
    <div v-for="(cat, id) in level1" :key="id">{{ cat.bc_caption }}</div>
    <div v-for="(cat2, id) in level2" :key="id">{{ cat2.bc_caption }}</div>
    <div v-for="(cat3, id) in level3" :key="id">{{ cat3.bc_caption }}</div>
    <div v-if="!categories"  class="categories-wrapper">
      <div class="categories" v-for="(item, id) in category_list" :key="id">
        <div class="step-1">
          <input id="categoryChoice1" name="category" :value="item.breadcrumbs" v-if="!item.children" @change="$emit('setnew', $event.target.value)"    type="radio" v-model="level1">
          <label class="small l1">{{ item.category_caption }}</label>
        </div>
        <div style="padding-left:20px" v-for="(sub, id) in item.children" :key="id">
          <div class="step-2-wrapper">
            <input  id="categoryChoice2" name="category" :value="sub.breadcrumbs" v-if="!sub.children" type="radio" v-model="level2">
            <label class="small">{{ sub.category_caption }}</label>
          </div>
          <div class="step-3" style="padding-left:20px" v-for="(last, id) in sub.children" :key="id">
            <input  id="categoryChoice3" name="category" :value="last.breadcrumbs" v-if="!last.children" type="radio" v-model="level3">
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
    category_list: Array
  },
  emits: ['reset', 'update:setnew'],
  data () {
    return {
      level1: null,
      level2: null,
      level3: null
    }
  }
}
</script>

<style lang="scss">
</style>
