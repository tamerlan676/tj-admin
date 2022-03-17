<template>
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
</template>

<script>
export default {
  props: {
    cur_price: String,
    max_price: String
  }

}
</script>
