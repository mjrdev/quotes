<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import {Quotes} from './quotes';
import axios from 'axios';

import { coins } from './coins';
import type { Coin } from './coins';

const [coin1, coin2, ...cs]: Coin[] = coins;

let quota: Quotes;
const currency: Ref<any> = ref({});
const invertCurrency: Ref<any> = ref({});

interface inputsCoin {
  sigla: string,
  value: number,
  coin: Coin
}

const inputsCoinOne: Ref<inputsCoin> = ref({
  sigla: 'BRL', value: 1, coin: coin1
});

const inputsCoinTwo: Ref<inputsCoin> = ref({
  sigla: 'USD', value: 1, coin: coin2
});

function searchCoin(value?: string): any {
  const coin = coins.find((c) => {
    return c.sigla === value
  })

  return coin
}

async function inputsCoin(id: number): Promise<void> {

  if(inputsCoinOne.value.sigla === inputsCoinTwo.value.sigla) {
    

    if(id === 1) {
      let coin: any = coins.find((c) => {
        return c.sigla !== inputsCoinTwo.value.sigla;
      })

      inputsCoinTwo.value.sigla = coin.sigla;
    }


    if(id === 2) {
      let coin: any = coins.find((c) => {
        return c.sigla !== inputsCoinOne.value.sigla;
      })
      inputsCoinOne.value.sigla = coin.sigla;
    }
    

  }

  inputsCoinOne.value.coin = searchCoin(inputsCoinOne.value.sigla);
  inputsCoinTwo.value.coin = searchCoin(inputsCoinTwo.value.sigla);

  const request = await quota.get(`${inputsCoinOne.value.sigla}-${inputsCoinTwo.value.sigla}`);
  const request2 = await quota.get(`${inputsCoinTwo.value.sigla}-${inputsCoinOne.value.sigla}`);
  currency.value = request
  invertCurrency.value = request2;

  inputsValue(id == 1 ? 2 : 1)
}

async function inputsValue(id: number): Promise<void> {
  
  if(id === 1) {
    
     let coin = inputsCoinOne.value.value * currency.value[currency.value.pairString].ask;
     // @ts-ignore
     inputsCoinTwo.value.value = coin.toFixed(2);
  }

  if(id === 2) {
    
    let coin = inputsCoinTwo.value.value * invertCurrency.value[invertCurrency.value.pairString].ask;
    // @ts-ignore
    inputsCoinOne.value.value = coin.toFixed(2);
    
  }
}

onMounted(async (): Promise<void> => {
  quota = new Quotes('https://economia.awesomeapi.com.br/json/last/', 'usd-brl');

  const request = await quota.get('brl-usd');
  const request2 = await quota.get('usd-brl');
  currency.value = request
  invertCurrency.value = request2;

  inputsValue(1)
})

</script>

<template>
  <div class="item flex flex-col justify-center md:w-[38rem] sm:w-[30rem] w-[95%] mb-[8rem] sm:mb-[0rem]">

    <header class=" flex justify-center items-center bg-green-app h-[7rem] rounded-t-xl">
      <h1 class="text-[22pt] text-center font-light text-white font-mont">Cotação de moedas</h1>
    </header>

    <div class="bg-[#FCFCFC] drop-shadow-md p-4">

      <main class="font-semibold w-100 flex justify-evenly items-center py-8 pb-12 border-solid border-b-[1px] border-[#f2f2f2]">

        <div class="text-center flex-col grow w-[17rem]">

          <select name="select" class="text-center text-[14pt] border-none focus:ring-0 py-1 bg-transparent"
          v-model="inputsCoinOne.sigla"
          @change="inputsCoin(1)">
            <option class="text-[11pt] text-center focus:text-left mx-0 px-0" v-for="coin in coins" :value="coin.sigla">
              {{coin.name}}
            </option>
          </select>
          <div class="flex justify-center items-center">
            <h3 class="w-10 text-[14pt] text-right">{{inputsCoinOne.coin.sigla}}</h3>
            <input type="number" class="border-none focus:rign-0 bg-[#f1f1f1] mx-1 focus:ring-0 w-[60%] px-1 py-1" min="0"
            v-model="inputsCoinOne.value"
            @input="inputsValue(1)"
            >
            <!-- <input type="text" value="1.00" class="bg-[#FCFCFC] w-full">   -->
          </div>
        </div>

        <div class="text-2xl text-center  w-[2rem]">≈</div>

        <div class="text-2xl text-center flex-col grow w-[17rem]">

          <select name="select" class="text-center text-[14pt] border-none focus:ring-0 py-1 bg-transparent"
          v-model="inputsCoinTwo.sigla"
          @change="inputsCoin(2)">
            <option class="text-[11pt] text-left" selected v-for="coin in coins" :value="coin.sigla">
              {{coin.name}}
            </option>
          </select>
          <div class="flex justify-center items-center">
            <h3 class="w-10 text-[14pt] text-right">{{inputsCoinTwo.coin.sigla}}</h3>
            <input type="number" class="border-none focus:rign-0 bg-[#f1f1f1] mx-1 focus:ring-0 w-[60%] px-1 py-1" min="0"
            v-model="inputsCoinTwo.value"
            @input="inputsValue(2)"
            >
            <!-- <input type="text" value="1.00" class="bg-[#FCFCFC] w-full">   -->
          </div>
        </div>
      </main>

      <div class="flex flex-col items-center py-2 bg-[#FCFCFC] rounded-b-xl">
        <div class="flex justify-center w-full text-[8pt]">{{new Date()}}</div>
        <div class="flex justify-end items-center gap-2 w-full text-[8pt] mr-8">
          <span class="bg-green-400 w-[0.6rem] h-[0.6rem] rounded-[100%] text-center mt-[2px] animate-pulse"></span>
          <p>atualizando</p>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
