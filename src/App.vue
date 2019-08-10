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
        <div class="cell foundation">
          <img class="pip" src="/images/pips/spade.png">
        </div>
        <div class="cell foundation">
          <img class="pip" src="/images/pips/heart.png">
        </div>
        <div class="cell foundation">
          <img class="pip" src="/images/pips/diamond.png">
        </div>
        <div class="cell foundation">
          <img class="pip" src="/images/pips/clover.png">
        </div>
      </div>
    </div>
    <CascadeArea></CascadeArea>
  </div>
</template>

<script>
import CascadeArea from '@/components/CascadeArea.vue';

export default {
  name: 'app',
  components: {
    CascadeArea,
  },
  mounted() {
    this.setUpCascades();
  },
  methods: {
    setUpCascades() {
      const deck = [...Array(52).keys()];
      for (let i = 0; i < 52; i += 1) {
        const target = Math.floor(Math.random() * 52);
        [deck[i], deck[target]] = [deck[target], deck[i]];
      }

      for (let i = 0; i < 52; i += 1) {
        this.$store.commit('insertCard', {
          cascadeId: i % 8,
          cardId: deck[i],
        });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
  @import "./css/_variables";
  $cell-color: rgb(234, 235, 219);
  $card-width: 80px;

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
          margin-left: 10px;
          width: $card-width;
          height: $card-height;
          background-color: $cell-color;
          border-radius: 13px;
        }
      }

      .foundation-area {
        .pip {
          width: 40px;
          margin: 34px auto 0 auto;
          display: block;
        }
      }
    }

  }
</style>
