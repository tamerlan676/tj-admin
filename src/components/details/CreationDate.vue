<template>
    <div class="creation-date">
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

<style lang="scss">
.creation-date{
   margin-bottom: 24px;
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
</style>
