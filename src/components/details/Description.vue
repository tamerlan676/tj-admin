<template>
<div class="description">
    <div v-if="description" class="field">
      <label for="">Описание товара</label>
      <textarea :value="description"></textarea>
    </div>
</div>
</template>

<script>
export default {
  props: {
    description: String
  }
}
</script>

<style lang="scss" scoped>
  .description{
    margin-bottom: 24px;
    label{
        display: block;
        font-weight: 500;
        margin-bottom: 10px;
        color: #6A7797;
        font-size: 20px;
    }
      textarea{
        font-family: inherit;
        width: 100%;
        height: 170px;
        padding: 16px;
        font-weight: 500;
        font-size: 18px;
        border-radius: 10px;
        border: 1px solid #6A7797;
      }

  }
</style>
