<template>
    <div class="field">
        <label for="">Цвета</label>
        <div v-for="color in colors" :key="color" class="category-name">{{ color.product_colour }}</div>
        <div v-if="colors" @click="resetColors" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить цвета</div>
        <!-- <div v-if="!goodItem.colours">
        <div class="category-name" v-for="(newcolor, id) in newColors" :key="id">{{ newcolor }} <span @click="deleteCurrentColor(id)" class="del-cat">x</span></div>
        <div class="color-wrapper" v-for="(colorItem, id) in colorList" :key="id">
            <input type="radio" :id="colorItem.colour" v-on:input="addNewColor(colorItem.colour)"  :value="colorItem.colour">
            <label class="small" :for="colorItem.colour">{{ colorItem.colour }}</label>
        </div>
        </div> -->
    </div>
</template>

<script>
export default {
  props: {
    colors: Array,
    brand_list: Array
  }

}
</script>
