<template>
  <div class="ml-container ml-container--fluid">
    <div id="navbar">
      <h1>EXAMPLE APP</h1>
      <h2>v1.0.0</h2>
    </div>
    <div class="ml-container ml-container--fluid mu-p-200">
      <div class="ml-flexy block mu-p-050">
        <div class="ml-flexy__col--full">
          <!--<m-icon name="DisplaySearchProduct32" color="#41a017"/>-->
          <m-heading class="mu-m-075" underline lineHeightXS>Buscar Pedido </m-heading>
        </div>
        <div class="ml-flexy__col--1of4">
          <m-field id="order" class="mu-m-075" label="Nº de Pedido">
            <m-text-input id="order-input" v-model="orderNumber" size="s"/>
          </m-field>
        </div>
        <div class="ml-flexy__col--1of4">
          <m-field id="store" class="mu-m-075" label="Tienda">
              <m-select id="store-input" v-model="storeNumber" size="s" :items="[]"/>
            </m-field>
        </div>
        <div class="ml-flexy__col--1of4 ml-flexy__col--push-1of4">
          <m-button label="Buscar" class="mu-mt-250" size="s" style="width:90%"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {MTextInput,MHeading, MSelect, MField, MIcon, MButton} from '@mozaic-ds/vue-3'
import {ref} from 'vue'

const orderNumber = ref<String>('')
const storeNumber = ref<String>('')
const storeList = ref<Array<any>>([])
</script>
<style lang="scss" scoped>
#navbar{
  height: 4rem;
  width:100%;
  display: flex;
  flex-direction: row;
  padding:0 .5rem;
  background: white;
  align-items: center;
  border-bottom: 4px solid $primary-600;
  h1{
    font-family: 'Michroma', sans-serif;
    margin-block-start: 0;
    margin-block-end: 0;
    color:$primary-500;
    font-weight: bolder;
  }
  h2{
    font-family: 'Michroma', sans-serif;
    margin-block-start: 0;
    margin-block-end: 0;
    color:$primary-700;
    font-size: .8rem;
    margin-left: .5rem;
    padding-top: .5rem;
    font-weight: bolder;
  }
}

.block{
  background: white;
  box-shadow: 0 0 6px rgba(100,100,100, .6);

  /*.mt-heading--line-height-xs{
    font-size: 2rem;
  }*/
}
</style>
