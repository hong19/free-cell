<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Cell/>
      </div>
      <div class="col">
        <Cell/>
      </div>
      <div class="col">
        <Cell/>
      </div>
      <div class="col">
        <Cell/>
      </div>
    </div>
  </div>
</template>

<script>
  import Cell from './Cell';
  export default {
    name: 'CellContainer',
    components: { Cell },
  };
</script>

<style scoped>

</style>
