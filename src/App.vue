<script>
import producten from "@/json/producten.json";
export default{
  name: "App",

  data(){
    return {
      data: producten
    }
  },
}
</script>

<template>
<div>
  <router-view/>
</div>
</template>

<style>

</style>
