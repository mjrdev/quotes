<script setup lang="ts">
import axios from 'axios'

interface IData {
  title: string,
  coinOne: number,
  coinTwo: number,
  simbol: string
}

const data: IData = {
  title: 'Contação de Moedas',
  coinOne: 1.00,
  coinTwo: 1.00,
  simbol: "$"
}
    
async function get() {
    const get = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    console.log(get);
}

get()


</script>

<template>
  <div class="item flex flex-col justify-center w-[34rem] ">

    <header class=" flex justify-center items-center bg-green-900 h-[7rem] rounded-t-xl">
      <h1 class="text-[22pt] text-center font-regular text-white">{{data.title}}</h1>
    </header>

    <div class="bg-[#FCFCFC] drop-shadow-md ">

      <main class="font-semibold w-100 flex justify-evenly py-4">

        <div class="text-2xl text-center flex-col grow w-[15rem]">

          <select name="select" class="text-center text-[14pt] outline-none">
            <option value="valor1" class="text-[14pt]">Real</option>
            <option value="valor2" class="text-[14pt]">Dolar</option>
            <option value="valor3" class="text-[14pt]">Euro</option>
          </select>
          <div class="flex">
            <h3 class="w-full">R$1.000</h3>
            <!-- <input type="text" value="1.00" class="bg-[#FCFCFC] w-full">   -->
          </div>
        </div>

        <div class="text-2xl text-center  w-[2rem]">≈</div>

        <div class="text-2xl text-center flex-col grow w-[15rem]">

          <select name="select" class="text-center text-[14pt] outline-none">
            <option value="valor1" class="text-[14pt]">Real</option>
            <option value="valor2" class="text-[14pt]">Dolar</option>
            <option value="valor3" class="text-[14pt]">Euro</option>
          </select>
          <div class="flex justify-center">
            <h3 class="w-full">$1.0000</h3>
            <!-- <input type="text" value="1.00" class="bg-[#FCFCFC] w-full">   -->
          </div>
        </div>
      </main>

      <bottom class="flex flex-col items-center py-2 bg-[#FCFCFC] rounded-b-xl">
        <div class="flex justify-center w-full text-[8pt]">{{new Date()}}</div>
        <div class="flex justify-end items-center gap-2 w-full text-[8pt] mr-8">
          <span class="bg-green-400 w-[0.6rem] h-[0.6rem] rounded-[100%] text-center mt-[2px]"></span>
          <p>atualizando</p>
        </div>
    </bottom>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
