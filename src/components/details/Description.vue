<template>
    <div v-if="description" class="field">
      <label for="">Описание товара</label>
      <textarea :value="description"></textarea>
    </div>
</template>

<script>
export default {
  props: {
    description: String
  }

}
</script>
