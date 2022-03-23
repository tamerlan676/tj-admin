<template>
  <div class="table">
    <table>
      <thead>
      <tr>
        <td>Фото</td>
        <td>Артикул</td>
        <td>Название</td>
        <td>Цена</td>
        <td>Количество</td>
        <td>Статус</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in goods" :key="item.id">
        <td><img class="good-img" :src="item.img"></td>
        <td><router-link :to="{ name: 'GoodItem', params: { id: item.id }}">{{ item.name }}</router-link></td>
        <td>{{ item.product_class }}</td>
        <td>{{ item.cur_price }} ₽</td>
        <td class="actions">{{ item.stock_rest }} шт.</td>
        <td>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    goods: Array
  }

}
</script>

<style lang="scss">
.table{
  margin-bottom: 24px;
  table{
    width: 100%;
    border-spacing: 0;
  }
  thead{
    background: #D8DDE9;
    padding: 16px 40px;
    text-align: left;
    width: 100%;
    height: 52px;
    font-weight: 500;
  }
  td{
    padding: 16px;
    max-width: 80px;
  }
  tbody{
    color: #6A7797;
    font-weight: 500;
    tr{
      background: #F6F7FA;
      .good-img{
        width: 60px;
        height: 60px;
        object-fit: contain;
      }
    }
    td{
      border-bottom: 3px solid #fff;
    }
    .actions a{
      margin-right: 16px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
}
</style>
