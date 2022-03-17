<template>
    <div class="field">
        <label for="">Брэнд</label>
        <div v-if="brand" class="category-name">{{ brand }}</div>
        <div v-if="brand" @click="$emit('resetBrand')" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить бренд</div>
        <select v-if="!brand">
        <option v-for="(item, key) in brand_list" :key="key" value="">{{ item.brand }}</option>
        </select>
    </div>
</template>

<script>
export default {
  props: {
    brand: String,
    brand_list: Array
  },
  emits: ['resetBrand']

}
</script>
