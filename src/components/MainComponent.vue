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
                 v-model.number="controllOne" @keyup="keydown" onfocus="this.select()"
                 @focus="focusOn = true">
          <button class="btn" @click="totalSum" v-if="controllOther != 0">Сумма</button>
          <div class="svg" :class="{ svgNone: focusOn }">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_85)">
                <path
                  d="M5.48367 1.43682L3.00029 3.9208L0.516903 1.43652C0.398503 1.31812 0.206976 1.31812 0.0885757 1.43652C-0.0295252 1.55492 -0.0295252 1.74674 0.0885757 1.86514L2.78599 4.56345C2.90409 4.68185 3.09591 4.68185 3.21401 4.56345L5.91142 1.86517C6.02953 1.74677 6.02953 1.55464 5.91142 1.43624C5.79362 1.31842 5.60177 1.31842 5.48367 1.43682Z"
                  fill="#0F1011" stroke="#0F1011" stroke-width="0.25"/>
              </g>
              <defs>
                <clipPath id="clip0_2_85">
                  <rect width="6" height="6" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div class="group-elem">
          <p class="text">Контролл 2</p>
          <input class="input_style" name="Контролл 2" type="number" min="0"
                 @input="updateControllOther"
                 v-model.number="controllOther" @keyup="keydown" onfocus="this.select()">
          <button class="btn" @click="constantBtn">Константа</button>
          <div class="svg">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_85)">
                <path
                  d="M5.48367 1.43682L3.00029 3.9208L0.516903 1.43652C0.398503 1.31812 0.206976 1.31812 0.0885757 1.43652C-0.0295252 1.55492 -0.0295252 1.74674 0.0885757 1.86514L2.78599 4.56345C2.90409 4.68185 3.09591 4.68185 3.21401 4.56345L5.91142 1.86517C6.02953 1.74677 6.02953 1.55464 5.91142 1.43624C5.79362 1.31842 5.60177 1.31842 5.48367 1.43682Z"
                  fill="#0F1011" stroke="#0F1011" stroke-width="0.25"/>
              </g>
              <defs>
                <clipPath id="clip0_2_85">
                  <rect width="6" height="6" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="btn-focus"></div>
        </div>

        <div class="group-elem">
          <p class="text">Контролл 3</p>
          <input class="input_style" name="Контролл 3" type="number" min="0"
                 @input="updateControllOther"
                 v-model.number="controllOther" @keyup="keydown" onfocus="this.select()">
          <div class="svg">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_85)">
                <path
                  d="M5.48367 1.43682L3.00029 3.9208L0.516903 1.43652C0.398503 1.31812 0.206976 1.31812 0.0885757 1.43652C-0.0295252 1.55492 -0.0295252 1.74674 0.0885757 1.86514L2.78599 4.56345C2.90409 4.68185 3.09591 4.68185 3.21401 4.56345L5.91142 1.86517C6.02953 1.74677 6.02953 1.55464 5.91142 1.43624C5.79362 1.31842 5.60177 1.31842 5.48367 1.43682Z"
                  fill="#0F1011" stroke="#0F1011" stroke-width="0.25"/>
              </g>
              <defs>
                <clipPath id="clip0_2_85">
                  <rect width="6" height="6" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
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
      focusOn: false,
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

  .number input[type="number"]::-webkit-outer-spin-button,
  .number input[type="number"]::-webkit-inner-spin-button {
    display: none;
  }

  .input_style {
    padding-left: 10px;
    font-size: 15px;
    /*border: none;*/
    width: 130px;
    height: 29px;
    color: #0F1011;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .svg {
    position: absolute;
    margin-top: 14px;
    margin-left: 167px;
  }

  .svgNone {
    display: none;
  }

  .input_style:focus {
    border: 1px #DDDDDD solid;
  }

  .input_style:hover {
    color: #00467F;
  }

  .btn {
    position: absolute;
    width: 51px;
    height: 14px;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 148px;
    margin-top: 40px;
    color: #0070CD;
    background: none;
    border: none;
    padding: unset;
  }
</style>
