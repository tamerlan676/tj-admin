<template>
<div class="sales">
      <div class="field">
        <label for="">Размер скидки</label>
        <input class="input" type="text"  :value="sale">
      </div>
</div>
</template>

<script>
export default {
  props: {
    sale: String
  }

}
</script>
<style lang="scss" scoped>
  .sales{
    margin-bottom: 24px;
      .field{
        width: 50%;
      label{
        display: block;
        font-weight: 500;
        margin-bottom: 10px;
        color: #6A7797;
        font-size: 20px;
    }
      .input{
        display: block;
        width: 100%;
        height: 50px;
        font-size: 18px;
        border: 1px solid #6A7797;
        border-radius: 10px;
        padding-left: 8px;
        font-weight: 500;
        margin-bottom: 8px;
        box-sizing: border-box;
    }
      }
    }

</style>
