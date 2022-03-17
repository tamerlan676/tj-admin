<template>
    <div class="field">
        <label for="">Артикул товара</label>
        <div class="category-name">{{ product_name }}</div>
    </div>
</template>

<script>
export default {
  props: {
    product_name: String
  }

}
</script>
