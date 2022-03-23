<template>
  <div v-if="!searchQuery" class="pagination">
    <div @click="$emit('prevPage')" class="page">Предыдущая</div>
    <div @click="$emit('firstPage')" class="page">Первая</div>
    <div v-if="pageNumber > 1" @click="$emit('pageMinusOne', pageMinusOne)" class="page">{{ pageMinusOne }}</div>
    <div class="page active">{{ pageNumber }}</div>
    <div v-if="pageNumber < totalPages" @click="$emit('pagePlusOne')" class="page">{{ pagePlusOne }}</div>
    <div @click="$emit('lastPage')" class="page">Последняя</div>
    <div @click="$emit('nextPage')" v-if="pageNumber < totalPages" class="page">Следующая</div>
  </div>
</template>

<script>
export default {
  props: {
    searchQuery: String,
    pageNumber: Number,
    pageMinusOne: Number,
    totalPages: Number,
    pagePlusOne: Number
  },
  emits: ['prevPage', 'firstPage', 'pageMinusOne', 'pagePlusOne', 'lastPage', 'nextPage']

}
</script>

<style lang="scss">
.pagination{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .page{
    padding: 5px;
    border: 1px solid #DFDFE2;
    min-width: 20px;
    text-align: center;
    margin-right: 5px;
    font-size: 14px;
    color: #6A7797;
    margin-bottom: 5px;
    &:last-child{
      margin-right: 0;
    }
    &:hover{
      background: #F2F5FF;
      cursor:pointer
    }
    &.active{
      background: #dbe3fa;
    }
  }
}
</style>
