<template>
    <div v-if="season" class="field-sm">
      <div class="field">
        <label for="">Сезон</label>
        <input class="input" type="text"  :value="season">
      </div>
    </div>
</template>
<script>
export default {
  props: {
    season: String
  }

}
</script>
