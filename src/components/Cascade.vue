<template>
  <div class="cascade">
    <ul>
      <li>
        <Card pip="spade" :number=1></Card>
      </li>
      <li>
        <Card pip="heart" :number=2></Card>
      </li>
      <li>
        <Card pip="diamond" :number=11></Card>
      </li>
      <li>
        <Card pip="clover" :number=13></Card>
      </li>
      <li>
        <Card pip="spade" :number=1></Card>
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
