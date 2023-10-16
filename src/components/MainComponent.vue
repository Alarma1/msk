<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="main-box">
    <div class="container">
      <div>
        <p class="text">Контролл 1</p>
        <div>
        </div>
        <input class="input_style hover-effect" name="Котролл 1" type="number" min="0" step="1" @input="updateControllOne"
               v-model.number="controllOne">
        <button class="btn" @click="totalSum" v-if="controllOther != 0" >Сумма</button>
      </div>

      <div><p class="text">Контролл 2</p></div>
      <div><input class="input_style" name="Котролл 1" type="number" min="0" @input="updateControllOther"
                  v-model.number="controllOther">
        <button class="btn" @click="constantBtn">Константа</button>
      </div>

      <div><p class="text">Контролл 3</p></div>
      <div><input class="input_style" name="Котролл 1" type="number" min="0" @input="updateControllOther"
                  v-model.number="controllOther"></div>
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
    updateControllOne(event) {
      const { value } = event.target;
      if (value.includes('.') || value.includes('-')) {
        this.controllOne = 0;
      }
      this.$store.commit('updateStateControllOne', this.controllOne);
      console.log(this.controllOne);
    },
    updateControllOther(event) {
      const { value } = event.target;
      if (value.includes('.') || value.includes('-')) {
        this.controllOther = 0;
      }
      this.$store.commit('updateStateControllOther', this.controllOther);
    },
    totalSum() {
      this.controllOne = this.$store.state.controllSum;
    },
    constantBtn() {
      this.controllOther = 1000;
      this.$store.commit('updateStateControllOther', this.controllOther);
    },
  },
};
</script>

<style scoped>
  .main-box {
    display: flex;
    width: 540px;
    height: 640px;
    margin: auto;
  }

  .container {
    width: 263px;
    height: 29px;
  }

  .text {
    width: 83px;
    height: 21px;
    margin-right: 50px;
    font-family: Open sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #767C82;
  }

  .input_style {
    border: none;
    width: 130px;
    height: 29px;
  }
  .input_style:focus {
    border: 1px #DDDDDD solid ;
  }
  .input_style:hover {
    color: #00467F;
  }
  .btn {
    color: #0070CD;
    background: none;
    border: none;
  }
</style>
