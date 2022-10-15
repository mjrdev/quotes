<script lang="ts" setup>
function openInfo(): void {
  return
}
const i = false;
</script>
<template>
  <a v-if="i" href="http://github.com/mjrdev/quotes" class="absolute opacity-0 bg-white w-[20rem] h-[6rem] bottom-8 lg:right-8 rounded-2xl flex flex-col items-center justify-center animate-opacity"
  style="animation-fill-mode: forwards">
    <div class="flex items-center justify-center gap-x-2">
      <i class="devicon-github-original text-xl align-middle"></i>
      <h1 href="http://github.com/mjrdev/quotes" class="text-[13pt] text-gray-800 font-bold align-middle font-mont">Acessar código fonte</h1>
    </div>

    <div class="flex flex-col items-center justify-center">
      <h2 class="flex gap-x-2 items-center text-gray-800 font-semibold font-mont">Feito com: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="25px"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="25px"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="25px"/>
      </h2>
    </div>
  </a>
</template>
<style scoped>
</style>