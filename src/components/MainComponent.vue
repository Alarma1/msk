<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="main-box">
    <div class="container">
      <div class="container-group">
        <div class="group-elem">
          <p class="text">Контролл 1</p>
          <div v-show="focusOn.focusControlOne">
            <input class="input_style hover-effect" ref="inControlOne" name="Контролл 1"
                   type="number" min="0" step="1"
                   @input="updateControlOne"
                   v-model.number="controlOne" @keyup="keydown"
                   @focus="focusOn.focusControlOne = true">
          </div>
          <button class="btn" @mouseup="totalSum" v-if="focusOn.focusControlOne">Сумма</button>
          <div class="unfocus-form" id="unfocusFormOne" @keydown="unfocusForm" @click="unfocusForm('inControlOne')"
               v-if="!focusOn.focusControlOne">
            <p class="unfocus-text" id="zeroControlOne">{{ this.controlOne | numberFormat }}</p>
            <svg class="unfocus-svg" id="svgControlOne" width="6" height="6" viewBox="0 0 6 6"
                 fill="none"
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
          <div v-show="focusOn.focusControlTwo">
            <input class="input_style" ref="inControlTwo" name="Контролл 2"
                   type="number" min="0" step="1"
                   @input="updateControlOther"
                   v-model.number="controlOther" @keyup="keydown"
                   @focus="focusOn.focusControlTwo = true">
          </div>
          <button class="btn" @mouseup="constantBtn" v-if="focusOn.focusControlTwo">Константа
          </button>
          <div class="unfocus-form" id="unfocusFormTwo" @keydown="unfocusForm" @click="unfocusForm('inControlTwo')"
               v-if="!focusOn.focusControlTwo">
            <p class="unfocus-text" id="zeroControlTwo">{{ this.controlOther | numberFormat }}</p>
            <svg class="unfocus-svg" id="svgControlTwo" width="6" height="6" viewBox="0 0 6 6"
                 fill="none"
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
          <div v-show="focusOn.focusControlTree">
            <input class="input_style" ref="inControlTree" name="Контролл 3"
                   type="number" min="0" step="1"
                   @input="updateControlOther"
                   v-model.number="controlOther" @keyup="keydown"
                   @focus="focusOn.focusControlTree = true"
                   @blur="focusOn.focusControlTree = false">
          </div>
          <div class="unfocus-form" @keydown="unfocusForm" @click="unfocusForm('inControlTree')"
               v-if="!focusOn.focusControlTree">
            <p class="unfocus-text">{{ this.controlOther | numberFormat }}</p>
            <svg class="unfocus-svg" width="6" height="6" viewBox="0 0 6 6" fill="none"
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
import numberFormat from '@/helpers/numberFormat';

export default {
  filters: { numberFormat },
  data() {
    return {
      controlOne: 0,
      controlOther: 0,
      controlSum: 0,
      focusOn: {
        focusControlOne: false,
        focusControlTwo: false,
        focusControlTree: false,
      },
    };
  },
  mounted() {
    this.checkClick();
  },
  methods: {
    updateControlOne(input) {
      const { value } = input.target;
      if (value.includes('.') || value.includes('-')) {
        this.controlOne = 0;
      }
      this.$store.commit('updateStateControlOne', this.controlOne);
    },
    updateControlOther(input) {
      const { value } = input.target;
      if (value.includes('.') || value.includes('-')) {
        this.controlOther = 0;
      }
      this.$store.commit('updateStateControlOther', this.controlOther);
    },
    totalSum() {
      this.$store.commit('controlSum');
      this.controlOne = this.$store.state.controlSum;
      this.$refs.inControlOne.blur();
      this.focusOn.focusControlOne = false;
    },
    constantBtn() {
      this.controlOther = 1000;
      this.$store.commit('updateStateControlOther', this.controlOther);
    },
    keydown(event) {
      console.log(event.code);
      if ((event.code === 'Enter' || event.code === 'NumpadEnter') && event.target.name === 'Контролл 1') {
        this.controlOne = event.target.value;
        this.focusOn.focusControlOne = false;
      }
      if ((event.code === 'Escape') && event.target.name === 'Контролл 1') {
        this.controlOne = 0;
        this.focusOn.focusControlOne = false;
      }
      if ((event.code === 'Enter' || event.code === 'NumpadEnter') && (event.target.name === 'Контролл 2' || event.target.name === 'Контролл 3')) {
        this.controlOther = event.target.value;
        this.focusOn.focusControlTwo = false;
        this.focusOn.focusControlTree = false;
      }
      if (event.code === 'Escape' && (event.target.name === 'Контролл 2' || event.target.name === 'Контролл 3')) {
        this.controlOther = 0;
        this.focusOn.focusControlTwo = false;
        this.focusOn.focusControlTree = false;
      }
    },
    unfocusForm(refData) {
      if (refData === 'inControlOne') {
        this.focusOn.focusControlOne = true;
        this.$nextTick(() => {
          this.$refs.inControlOne.focus();
          this.$refs.inControlOne.select();
        });
      }
      if (refData === 'inControlTwo') {
        this.focusOn.focusControlTwo = true;
        this.$nextTick(() => {
          this.$refs.inControlTwo.focus();
          this.$refs.inControlTwo.select();
        });
      }
      if (refData === 'inControlTree') {
        this.focusOn.focusControlTree = true;
        this.$nextTick(() => {
          this.$refs.inControlTree.focus();
          this.$refs.inControlTree.select();
        });
      }
    },
    checkClick() {
      document.addEventListener('click', (event) => {
        const targetElement = event.target;
        if (targetElement.name === 'Контролл 1' || targetElement.id === 'zeroControlOne' || targetElement.id === 'svgControlOne' || targetElement.id === 'unfocusFormOne') {
          this.focusOn.focusControlOne = true;
        } else {
          this.focusOn.focusControlOne = false;
        }
        if (targetElement.name === 'Контролл 2' || targetElement.id === 'zeroControlTwo' || targetElement.id === 'svgControlTwo' || targetElement.id === 'unfocusFormTwo') {
          this.focusOn.focusControlTwo = true;
        } else {
          this.focusOn.focusControlTwo = false;
        }
      });
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
    height: 29px;
    margin-left: 188px;
    margin-top: 243px;
  }

  .group-elem {
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    height: 29px;
  }

  .group-elem:not(:last-child) {
    margin-right: 25px;
  }

  .text {
    width: 83px;
    height: 21px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 50px;
    font-family: Open sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 20.43px;
    color: #767C82;
  }

  .unfocus-form {
    cursor: pointer;
    display: flex;
    margin-left: 10px;
  }

  .unfocus-form:hover {
    color: #00467F;
  }

  .unfocus-text {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .unfocus-svg {
    margin-top: 5px;
    margin-left: 6px;
  }

  .number input[type="number"]::-webkit-outer-spin-button,
  .number input[type="number"]::-webkit-inner-spin-button {
    display: none;
  }

  .input_style {
    width: 130px;
    height: 29px;
    font-size: 15px;
    padding-left: 10px;
    border: 1px solid transparent;
    color: #0F1011;
  }

  .input_style:focus {
    border: 1px #DDDDDD solid;
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
    margin-left: 145px;
    margin-top: 42px;
    color: #0070CD;
    background: none;
    border: none;
    padding: unset;
    cursor: pointer;
  }
</style>
