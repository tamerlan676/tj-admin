<template>
<div class="images">
    <div class="field">
      <label for="">Фото Товара</label>
      <div class="good-images">
        <div class="img" v-for="(image, id) in images" :key="id"><img :src="image"></div>
      </div>
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

<style lang="scss" scoped>
  .images{
    margin-bottom: 24px;
    label{
      display: block;
      font-weight: 500;
      margin-bottom: 10px;
      color: #6A7797;
      font-size: 20px;
    }
    .good-images{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
      img{
        max-width: 200px;
      }
    }
  }
</style>
