<script setup lang="ts">
import axios from 'axios'

interface IData {
  title: string,
  coinOne: number,
  coinTwo: number,
  simbol: string
}

const data: IData = {
  title: 'Contação em tempo real',
  coinOne: 1.00,
  coinTwo: 1.00,
  simbol: "$"
}
    
async function get() {
    const get = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    console.log(get);
}


</script>

<template>
  <div class="item flex flex-col justify-center">
    <h1 class="text-3xl font-bold">{{data.title}}</h1>
    <h3>$1,00 > R$5,00</h3>
  </div>
</template>

<style scoped lang="scss">
</style>
