<template>
  <div class="cascade">
    <ul>
      <li>
        <Card></Card>
      </li>
      <li>
        <Card></Card>
      </li>
      <li>
        <Card></Card>
      </li>
    </ul>
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
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>
