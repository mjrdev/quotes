<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import Quotes from './quotes';
import axios from 'axios';

import { coins } from './coins';
import type { Coin, Current } from './coins';

const [coin1, coin2]: Coin[] = coins;
coin2.defaultValue = 0.1878;

const currency: Ref<Current> = ref({ value: 0.1878 });
const invertValue: Ref<Current> = ref({ value: 5.29 });
const inputCoinOne: Ref<Coin> = ref(coin1);
const inputCoinTwo: Ref<Coin> = ref(coin2);

function changeCoin(event: EventListenerOptions, item: number): void {

  if(item === 1) {
    let newValue = inputCoinOne.value.defaultValue * currency.value.value;
    // @ts-ignore
    inputCoinTwo.value.defaultValue = newValue.toFixed(2);
  }
  if(item === 2) {
    let newValue = inputCoinTwo.value.defaultValue * invertValue.value.value;
    // @ts-ignore
    inputCoinOne.value.defaultValue = newValue.toFixed(2);
  }
}

onMounted(async (): Promise<void> => {
  const quota = new Quotes('https://economia.awesomeapi.com.br/json/last/', 'usd-brl');

  const request = await quota.quota('usd-brl');
  console.log(request);
  
})

</script>

<template>
  <div class="item flex flex-col justify-center md:w-[38rem] sm:w-[30rem] w-[95%] mb-[8rem] sm:mb-[0rem]">

    <header class=" flex justify-center items-center bg-green-app h-[7rem] rounded-t-xl">
      <h1 class="text-[22pt] text-center font-light text-white font-mont">text</h1>
    </header>

    <div class="bg-[#FCFCFC] drop-shadow-md p-4">

      <main class="font-semibold w-100 flex justify-evenly items-center py-8 pb-12 border-solid border-b-[1px] border-[#f2f2f2]">

        <div class="text-2xl text-center flex-col grow w-[17rem]">

          <select name="select" class="text-center text-[14pt] border-none focus:ring-0 py-1 bg-transparent">
            <option value="valor1" class="text-[11pt] text-left" v-for="coin in coins">
              {{coin.name}}
            </option>
          </select>
          <div class="flex justify-center items-center">
            <h3 class="w-10">R$</h3>
            <input type="number" class="border-none focus:rign-0 bg-transparent focus:ring-0 w-[60%] px-1 py-1"
            v-model="inputCoinOne.defaultValue"
            @input="(e) => { changeCoin({}, 1) }">
            <!-- <input type="text" value="1.00" class="bg-[#FCFCFC] w-full">   -->
          </div>
        </div>

        <div class="text-2xl text-center  w-[2rem]">≈</div>

        <div class="text-2xl text-center flex-col grow w-[17rem]">

          <select name="select" class="text-center text-[14pt] border-none focus:ring-0 py-1 bg-transparent">
            <option value="valor1" class="text-[11pt] text-left" selected v-for="coin in coins">
              {{coin.name}}
            </option>
          </select>
          <div class="flex justify-center items-center">
            <h3 class="w-10">$</h3>
            <input type="number" class="border-none focus:rign-0 bg-transparent focus:ring-0 w-[60%] px-1 py-1"
            v-model="inputCoinTwo.defaultValue"
            @input="(e) => { changeCoin({}, 2) }">
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
