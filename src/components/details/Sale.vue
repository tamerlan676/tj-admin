<template>
    <div class="field-sm" v-if="sale">
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
