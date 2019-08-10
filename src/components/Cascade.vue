<template>
  <div class="cascade">
    <Card></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Cascade',
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>

  .cascade {
    margin: 0 auto;
  }
</style>
