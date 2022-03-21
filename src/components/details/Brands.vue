<template>
  <div class="brand">
    <label for="">Брэнд</label>
    <div class="wrapper">
      <transition name="fade">
        <div v-if="brand" class="brand-name">{{ brand }}</div>
      </transition>
      <div v-if="brand" @click="$emit('resetBrand')" class="change-brand"><img src="@/assets/icons/pen-solid.svg"></div>
    </div>
    <div v-if="new_brand" class="new-brand">{{ new_brand }}</div>
    <select v-if="!brand" @change="$emit('setNewBrand', $event.target.value)">
      <option v-for="(item, key) in brand_list" :key="key"  :value="item.brand">{{ item.brand }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    brand: String,
    brand_list: Array,
    new_brand: String
  },
  emits: ['resetBrand', 'setNewBrand']

}
</script>
<style lang="scss">
.brand{
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
    .brand-name{
      font-weight: 500;
      background: #e5e5e5;
      padding: 10px 15px;
      border-radius: 5px;
      width: fit-content;
      margin-bottom: 8px;
      margin-right: 8px;
    }
    .change-brand{
      cursor: pointer;
    }
  }
  .new-brand{
    font-weight: 500;
    background: #e5e5e5;
    padding: 10px 15px;
    border-radius: 5px;
    width: fit-content;
    margin-bottom: 8px;
}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
