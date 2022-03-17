<template>
    <div class="field">
        <label for="">Размеры</label>
        <div v-for="(size, key) in sizes" :key="key" class="category-name">{{ size.size }}</div>
        <div v-if="sizes" @click="$emit('resetSizes')" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить размеры</div>
        <div v-if="!sizes" class="sizes-wrapper">
        <div v-for="(s, key) in sizeList" :key="key">
          <input name="sizes" type="checkbox" :value="s.size">{{ s.size }}
        </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    sizes: Array,
    sizeList: Array
  },
  emits: ['resetSizes']

}
</script>
