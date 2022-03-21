<template>
    <div class="popup">
      <h1>I am popup</h1>
    </div>
</template>

<script>
export default {
  props: {

  },
  emits: [],
  data () {
    return {
      newSizesArray: []
    }
  }

}
</script>

<style lang="scss">
.popup{
  width: 500px;
  padding: 20px;
  background: #e5e5e5;
  position: absolute;
  top: -20%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  transition: .5s all;
  &.active{
    top: 40%
  }
}
</style>
