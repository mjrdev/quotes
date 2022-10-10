<script setup lang="ts">
import axios from 'axios'

let text = 'ok'

    
async function get() {
    const get = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    console.log(get);
}

function seti(): void {
  text = 'new';
}

</script>

<template>
  <div class="item">
    <h1 class="text-3xl font-bold underline">{{text}}</h1>
    <h3 @click="seti()">$1,00 > R$5,00</h3>
  </div>
</template>

<style scoped lang="scss">
</style>
