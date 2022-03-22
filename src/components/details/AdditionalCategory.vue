<template>
  <div class="categories">
    <label for="">Дополнительная Категория</label>
      <transition name="slide-fade">
      <div class="categories-wrapper">
        <div v-if="additionalCategory.length > 0" class="new-categories" >
          <div class="category-name" v-for="(c, id) in additionalCategory" :key="id">{{c.bc_caption}}</div>
        </div>
        <div class="icons-wrapper">
          <div v-if="additionalCategory.length > 0"  @click="offBlock" class="change-categories"><img src="@/assets/icons/pen-solid.svg">Изменить</div>
        </div>
          <div :class="{active: !isActive}" class="categories-list" v-for="(item, id) in category_list" :key="id">
            <div class="step-1">
              <input id="categoryChoice1" name="category" :value="item.breadcrumbs" v-if="!item.children" @change="offBlock" @input="$emit('setAdditionalCategory', $event.target._value )" type="radio">
              <label class="small l1">{{ item.category_caption }}</label>
            </div>
            <div style="padding-left:20px" v-for="(sub, id) in item.children" :key="id">
              <div class="step-2-wrapper">
                <input  id="categoryChoice2" name="category" :value="sub.breadcrumbs" v-if="!sub.children" @change="offBlock" @input="$emit('setAdditionalCategory', $event.target._value )" type="radio">
                <label class="small">{{ sub.category_caption }}</label>
              </div>
              <div class="step-3" style="padding-left:20px" v-for="(last, id) in sub.children" :key="id">
                <input  id="categoryChoice3" name="category" :value="last.breadcrumbs" v-if="!last.children" @change="offBlock" @input="$emit('setAdditionalCategory', $event.target._value )" type="radio">
                <label class="small">{{ last.category_caption }}</label>
              </div>
            </div>
          </div>
        </div>
      </transition>
  </div>
</template>

<script>
export default {
  props: {
    category_list: Array,
    additionalCategory: Array
  },
  emits: ['reset', 'setAdditionalCategory'],
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    offBlock () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
.categories{
  margin-bottom: 24px;
  .wrapper{
    display: flex;
    align-items: center;
      .category-name{
        background: #e5e5e5;
        padding: 10px 15px;
        border-radius: 5px;
        width: fit-content;
        margin-right: 8px;
      }
      .change-categories{
        cursor: pointer;
      }

  }
  .new-categories{
    display: flex;
    font-weight: 600;
    background: #e5e5e5;
    width: fit-content;
    padding:10px;
    margin-bottom: 10px;
    border-radius: 10px;
    .category-name{
      margin-right: 10px;
      &:last-child{
        margin-right: 0;
      }
    }
}
.icons-wrapper{
  display: flex;
  margin-bottom: 16px;
    .change-categories{
      cursor: pointer;
      margin-right: 16px;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      img{
        margin-right: 4px;
      }
    }
}
  label{
  display: block;
  font-weight: 500;
  margin-bottom: 10px;
  color: #6A7797;
  font-size: 20px;
}
.categories-list{
  .step-1 {
    display: flex;
  }
  .step-2-wrapper{
        display: flex;
  }
  .step-3{
        display: flex;
  }
  .small{
  font-size: 16px;
  cursor: pointer;
  &.l1{
    font-weight: bold;
  }
}
}
.additional-categories-list{
  .step-1 {
    display: flex;
  }
  .step-2-wrapper{
        display: flex;
  }
  .step-3{
        display: flex;
  }
  .small{
  font-size: 16px;
  cursor: pointer;
  &.l1{
    font-weight: bold;
  }
}
}
}
.active{
  display: none;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
