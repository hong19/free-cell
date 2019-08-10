<template>
  <div class="cascade">
    <ul>
      <li v-for="cardId in cascade" v-bind:key="cardId">
        <Card :id="cardId"></Card>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from '@/components/Card.vue';

export default {
  name: 'Cascade',
  components: {
    Card,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: mapState({
    cascade(state) {
      return state.cascades[this.id];
    },
  }),
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
