<template>
  <div class="main">
    <div class="control-area">
      <div class="cell-area">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="timer-area">
        <div class="timer">
          00:00
        </div>
      </div>
      <div class="cell-area foundation-area">
        <div class="cell foundation"></div>
        <div class="cell foundation"></div>
        <div class="cell foundation"></div>
        <div class="cell foundation"></div>
      </div>
    </div>
    <div class="cascade-area">
      <div class="cascade">cascade</div>
      <div class="cascade">cascade</div>
      <div class="cascade">cascade</div>
      <div class="cascade">cascade</div>
      <div class="cascade">cascade</div>
      <div class="cascade">cascade</div>
      <div class="cascade">cascade</div>
      <div class="cascade">cascade</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
};
</script>

<style lang="scss">
  $card-width: 80px;
  $card-height: 112px;
  $cell-color: rgb(234, 235, 219);
  $spade-background-color: rgb(222, 221, 219);
  $spade-border-color: rgb(168, 191, 205);
  $heart-background-color: rgb(244, 240, 154);
  $heart-border-color: rgb(203, 220, 188);
  $diamond-background-color: rgb(240, 230, 211);
  $diamond-border-color: rgb(236, 226, 219);
  $clover-background-color: rgb(186, 154, 97);
  $clover-border-color: rgb(189, 197, 178);

  .main {
    background-color: rgb(163, 203, 228);
    display: grid;
    grid-template-rows: auto auto;
    .control-area {
      margin: 40px 20px;
      display: grid;
      grid-template-columns: 400px 150px 400px;
      .timer-area {
        .timer {
          padding-top: 28px;
          font-size: 32px;
          text-align: center;
        }
      }
      .cell-area {
        display: grid;
        grid-template-columns: auto auto auto auto;
        .cell {
          width: $card-width;
          height: $card-height;
          background-color: $cell-color;
          border-radius: 13px;
        }
      }
    }
    .cascade-area {
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto auto;
    }
  }
</style>
