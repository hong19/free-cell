<template>
  <div class="cascade-area">
    <Cascade v-for="cascadeId in cascadeIds" v-bind:key="cascadeId" :id="cascadeId">
    </Cascade>
  </div>
</template>

<script>
import Cascade from '@/components/Cascade.vue';

const cascadeIds = [...Array(8).keys()];

export default {
  name: 'CascadeArea',
  components: {
    Cascade,
  },
  data() {
    return {
      cascadeIds,
    };
  },
};
</script>

<style lang="scss" scoped>
.cascade-area {
    width: 950px;
    margin: 0 20px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
}
</style>
