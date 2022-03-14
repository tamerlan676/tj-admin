<template>
  <div class="loader">
      <img :src="require(`@/assets/icons/loader.gif`)" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.loader{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}
</style>
