<template>
  <div class="cascade-area">
    <Cascade></Cascade>
    <Cascade></Cascade>
    <Cascade></Cascade>
    <Cascade></Cascade>
    <Cascade></Cascade>
    <Cascade></Cascade>
    <Cascade></Cascade>
    <Cascade></Cascade>
  </div>
</template>

<script>
import Cascade from '@/components/Cascade.vue';

export default {
  name: 'CascadeArea',
  components: {
    Cascade,
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
