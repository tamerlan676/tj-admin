<template>
<div class="prices">
    <div class="field-sm">
      <div class="field">
        <label for="">Цена</label>
        <input class="input" type="text" :value="cur_price">
      </div>
      <div class="field" v-if="max_price">
        <label for="">Старая цена</label>
        <input class="input" type="text"  :value="max_price">
      </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    cur_price: String,
    max_price: String
  }

}
</script>

<style lang="scss" scoped>
  .prices{
      margin-bottom: 24px;
        .field-sm{
      display: flex;
      justify-content: space-between;
      .field{
        width: 50%;
        margin-right: 32px;
        &:last-child{
          margin-right: 0;
        }
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
  }
</style>
