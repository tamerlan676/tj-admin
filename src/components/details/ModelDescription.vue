<template>
<div class="model-description">
    <div v-if="modelDescription" class="field">
      <label for="">Описание модели</label>
      <textarea :value="modelDescription"></textarea>
    </div>
</div>
</template>

<script>
export default {
  props: {
    modelDescription: String
  }
}
</script>

<style lang="scss" scoped>
  .model-description{
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
        height: 100px;
        padding: 16px;
        font-weight: 500;
        font-size: 18px;
        border-radius: 10px;
        border: 1px solid #6A7797;
      }

  }
</style>
