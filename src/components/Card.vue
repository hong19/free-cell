<template>
  <div class="card-wrapper">
    <div :class="['card', pip]">
      <div class="header-container">
        <div class="number">{{ displayNumber }}</div>
        <img class="top-right-pip" :src="pipImageUrl">
      </div>
      <div>
        <img class="central-image" :src="centralImageUrl">
      </div>
      <div>
        <img class="bottom-left-pip" :src="pipImageUrl">
      </div>
    </div>
  </div>
</template>

<script>
const number2CentralImageMap = [
  'mouse',
  'cow',
  'tiger',
  'rabbit',
  'dragon',
  'snake',
  'horse',
  'sheep',
  'monkey',
  'chicken',
  'dog',
  'pig',
  'white-bird',
];

export default {
  name: 'card',
  props: {
    /**
     * 'spade', 'heart', 'diamond', 'clover'
     */
    pip: {
      type: String,
      required: true,
    },
    /**
     * 1~13
     */
    number: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pipImageUrl() {
      return `/images/pips/${this.pip}.png`;
    },
    displayNumber() {
      switch (this.number) {
        case 1:
          return 'A';
        case 11:
          return 'J';
        case 12:
          return 'Q';
        case 13:
          return 'K';
        default:
          return String(this.number);
      }
    },
    centralImageUrl() {
      return `/images/card-images/${number2CentralImageMap[this.number - 1]}.png`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../css/_variables";
  $spade-background-color: rgb(222, 221, 219);
  $spade-border-color: rgb(168, 191, 205);
  $heart-background-color: rgb(244, 240, 154);
  $heart-border-color: rgb(203, 220, 188);
  $diamond-background-color: rgb(240, 230, 211);
  $diamond-border-color: rgb(236, 226, 219);
  $clover-background-color: rgb(186, 154, 97);
  $clover-border-color: rgb(189, 197, 178);

  $pip-width: 16px;

  .card-wrapper {
    height: 30px;
  }
  .card {
    width: $card-width;
    height: $card-height;
    border-radius: 13px;
    display: grid;
    grid-template-rows: 20px auto 20px;

  .header-container {
    display: block;
  }

  .number {
    float: left;
    margin: 2px 0 0 5px;
  }

  .top-right-pip {
    width: $pip-width;
    float: right;
    margin: 5px 5px 0 0;
  }

  .bottom-left-pip {
    width: $pip-width;
    float: left;
    margin: 0 0 5px 5px;
  }
  .central-image {
    width: 70px;
    height: 60px;
    display: block;
    margin: 4px auto;
  }
  }

  .spade {
    background-color: $spade-background-color;
    border-color: $spade-border-color;
  }

  .heart {
    background-color: $heart-background-color;
    border-color: $heart-border-color;
  }

  .diamond {
    background-color: $diamond-background-color;
    border-color: $diamond-border-color;
  }

  .clover {
    background-color: $clover-background-color;
    border-color: $clover-border-color;
  }
</style>
