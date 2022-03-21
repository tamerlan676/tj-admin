<template>
  <div class="sizes">
      <label for="">Размеры</label>
      <div class="wrapper">
        <div v-for="(size, key) in sizes" :key="key" class="size-name">{{ size.size }}</div>
        <div v-if="sizes" @click="$emit('resetSizes')" class="change-sizes"><img src="@/assets/icons/pen-solid.svg"></div>
      </div>
      <div class="new-sizes-wrapper" >
        <div v-for="(s,id) in newSizes" :key="id" class="size-name">
          <span>{{ s }}</span> <img @click="$emit('delNewSize', id)" src="@/assets/icons/close.svg">
        </div>
      </div>
      <div v-if="!sizes" class="sizes-wrapper">
        <div class="variant" v-for="(s, key) in sizeList" :key="key">
          <input name="sizes" type="checkbox" @change="$emit('setNewSizes', $event.target.value)" :value="s.size">{{ s.size }}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    sizes: Array,
    sizeList: Array,
    newSizes: Array
  },
  emits: ['resetSizes', 'setNewSizes', 'delNewSize'],
  data () {
    return {
      newSizesArray: []
    }
  }

}
</script>

<style lang="scss">
.sizes{
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
    .size-name{
      font-weight: 500;
      background: #e5e5e5;
      padding: 10px 15px;
      border-radius: 5px;
      width: fit-content;
      margin-bottom: 8px;
      margin-right: 8px;
    }
    .change-sizes{
      cursor: pointer
    }
  }
  .sizes-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .variant{
      width: 120px;
      margin-bottom: 10px;
      font-weight: 500;
    }
  }
  .new-sizes-wrapper{
    margin-bottom: 16px;
    display: flex;
    flex-wrap: wrap;
    .size-name{
      font-weight: 500;
      background: #e5e5e5;
      padding: 10px 15px;
      border-radius: 5px;
      width: fit-content;
      margin-right: 8px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      span{
        display: block;
        margin-right: 8px;
      }
      img{
        cursor: pointer
      }
    }
  }
}
</style>
