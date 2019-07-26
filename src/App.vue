<template>
  <div class="container whole">
    <div class="row function-area">
      <div class="col">
        <CellContainer/>
      </div>
      <div class="col">00:00</div>
      <div class="col">
        <FoundationContainer/>
      </div>
    </div>
    <div class="row cascade-area">
      <div class="col">card</div>
      <div class="col">card</div>
      <div class="col">card</div>
      <div class="col">card</div>
      <div class="col">card</div>
      <div class="col">card</div>
      <div class="col">card</div>
      <div class="col">card</div>
    </div>

  </div>

</template>

<script>
import CellContainer from './components/CellContainer.vue';
import FoundationContainer from './components/FoundationContainer';

export default {
  name: 'app',
  components: {
    FoundationContainer,
    CellContainer,
  },
};
</script>

<style>
  .whole {
    background-color: rgb(163, 203, 228);
  }
  .function-area {
    height: 200px;
  }

  .cascade-area {
  }
</style>
