<template>
  <div class="colors">
    <label for="">Цвета</label>
    <div class="wrapper">
      <div v-for="color in colors" :key="color" class="color-name">{{ color.product_colour }}</div>
      <div v-if="colors" @click="$emit('resetColors')" class="change-colors"><img src="@/assets/icons/pen-solid.svg"></div>
    </div>
    <div class="new-colors">
      <div class="new-color" v-for="(new_color, id) in newColors" :key="id">
       <span>{{ new_color }}</span> <img @click="$emit('delNewColor', id)" src="@/assets/icons/close.svg">
      </div>
    </div>
    <div v-if="!colors" class="colors-wrapper">
      <div class="variant" v-for="(c, key) in color_list" :key="key">
        <input name="color" type="checkbox" @change="$emit('setNewColors', $event.target.value)" :value="c.colour">{{ c.colour }}
      </div>
    </div>
    <div v-if="!colors" class="new-color-field">
      <input type="text" placeholder="Новый цвет" v-model="newColor">
      <img src="@/assets/icons/plus-blue.svg" @click="setNewColors">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colors: Array,
    color_list: Array,
    newColors: Array
  },
  emits: ['resetColors', 'setNewColors', 'delNewColor'],
  data () {
    return {
      newColor: ''
    }
  },
  methods: {
    setNewColors () {
      if (this.newColor !== '') {
        this.$emit('setNewColors', this.newColor)
        this.newColor = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.colors{
  margin-bottom: 24px;
  label{
  display: block;
  font-weight: 500;
  margin-bottom: 10px;
  color: #6A7797;
  font-size: 20px;
}
  .wrapper{
    display: flex;
    align-items: center;
    .color-name{
      font-weight: 500;
      background: #e5e5e5;
      padding: 10px 15px;
      border-radius: 5px;
      width: fit-content;
      margin-bottom: 8px;
      margin-right: 8px;
    }
    .change-colors{
      cursor: pointer;
    }
  }
  .colors-wrapper{
    display: flex;
    flex-wrap: wrap;
    .variant{
      font-weight: 500;
      margin-bottom: 10px;
      width: 50%;
    }
  }
  .new-color-field{
    display: flex;
    justify-content: space-between;
    width: 100%;
    input{
      width: 100%;
      padding: 5px;
      font-family: inherit;
      border-radius: 10px;
      height: 50px;
      border: 1px solid #6A7797;
      font-size: 18px;
      font-weight: 500;
      margin-right: 8px;
    }
    img{
      cursor: pointer;
    }
  }
  .new-colors{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
    .new-color{
      font-weight: 500;
      background: #e5e5e5;
      padding: 10px 15px;
      border-radius: 5px;
      width: fit-content;
      margin-bottom: 8px;
      margin-right: 8px;
      display: flex;
      align-items: center;
      span{
        margin-right: 8px;
      }
      img{
        cursor: pointer;
      }
    }
  }
}
</style>
