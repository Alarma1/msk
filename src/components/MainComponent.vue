<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="main-box" ref="reset">
    <div class="container">
      <div class="container-group">
        <div class="group-elem">
          <p class="text">Контролл 1</p>
          <input class="input_style hover-effect" name="Контролл 1" type="number" min="0" step="1"
                 @input="updateControllOne"
                 v-model.number="controllOne" @keyup="keydown" onfocus="this.select()">
          <button class="btn" @click="totalSum" v-if="controllOther != 0">Сумма</button>
        </div>

        <div class="group-elem">
          <p class="text">Контролл 2</p>
          <input class="input_style" name="Контролл 2" type="number" min="0"
                 @input="updateControllOther"
                 v-model.number="controllOther" @keyup="keydown" onfocus="this.select()">
          <button class="btn" @click="constantBtn">Константа</button>
        </div>

        <div class="group-elem">
          <p class="text">Контролл 3</p>
          <input class="input_style" name="Контролл 3" type="number" min="0"
                 @input="updateControllOther"
                 v-model.number="controllOther" @keyup="keydown" onfocus="this.select()">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      controllOne: 0,
      controllOther: 0,
      controllSum: 0,
    };
  },
  methods: {
    updateControllOne(input) {
      const { value } = input.target;
      console.log(value.includes('+'));
      if (value.includes('.') || value.includes('-')) {
        this.controllOne = 0;
      }
      this.$store.commit('updateStateControllOne', this.controllOne);
    },
    updateControllOther(input) {
      const { value } = input.target;
      if (value.includes('.') || value.includes('-')) {
        this.controllOther = 0;
      }
      this.$store.commit('updateStateControllOther', this.controllOther);
    },
    totalSum() {
      this.$store.commit('controllSum');
      this.controllOne = this.$store.state.controllSum;
    },
    constantBtn() {
      this.controllOther = 1000;
      this.$store.commit('updateStateControllOther', this.controllOther);
    },
    keydown(event) {
      if ((event.code === 'Enter' || event.code === 'NumpadEnter') && event.target.name === 'Контролл 1') {
        this.controllOne = event.target.value;
        event.target.blur();
      }
      if ((event.code === 'Escape') && event.target.name === 'Контролл 1') {
        this.controllOne = '';
        event.target.blur();
      }
      if ((event.code === 'Enter' || event.code === 'NumpadEnter') && (event.target.name === 'Контролл 2' || event.target.name === 'Контролл 3')) {
        this.controllOther = event.target.value;
        event.target.blur();
      }
      if (event.code === 'Escape' && (event.target.name === 'Контролл 2' || event.target.name === 'Контролл 3')) {
        this.controllOther = '';
        event.target.blur();
      }
    },
  },
};
</script>

<style scoped>
  body {
    background-color: black
  }
  .main-box {
    display: flex;
    justify-content: center;
    width: 1920px;
    height: 700px;
    background-color: black;
    padding-top: 50px;
  }

  .container {
    background-color: white;
    width: 540px;
    height: 640px;
  }

  .container-group {
    margin-top: 243px;
    margin-left: 188px;
  }

  .group-elem {
    display: flex;
    align-items: baseline;
    margin-bottom: 36px;
  }

  .text {
    width: 83px;
    height: 21px;
    margin-right: 60px;
    font-family: Open sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    color: #767C82;
  }

  .input_style {
    font-size: 15px;
    border: none;
    width: 130px;
    height: 29px;
    color: #0F1011;
  ;
  }

  .input_style:focus {
    border: 1px #DDDDDD solid;
  }

  .input_style:hover {
    color: #00467F;
  }

  .btn {
    color: #0070CD;
    background: none;
    border: none;
    padding: unset;
  }
</style>
