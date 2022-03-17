<template>
    <div class="field">
      <label for="">Фото Товара</label>
      <div class="images">
        <div class="img" v-for="(image, id) in images" :key="id"><img :src="image"></div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    images: Array
  }

}
</script>
