<template>
    <div class="field">
        <label for="">Дата создания</label>
        <input readonly class="input" type="text" :value="date">
    </div>
</template>

<script>
export default {
  props: {
    date: String
  }

}
</script>
