<template>
    <div class="field">
        <label for="">Размеры</label>
        <div v-for="(size, key) in sizes" :key="key" class="category-name">{{ size.size }}</div>
        <div v-if="sizes" @click="resetSizes" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить размеры</div>
    </div>
</template>

<script>
export default {
  props: {
    sizes: Array,
    brand_list: Array
  }

}
</script>
