<template>
  <div class="main-content">
    <Header />
    <nuxt :style="{ direction: direction }"/>
  </div>
</template>

<script>
  import Header from "@/layouts/header";

  export default {
    components: {
      Header
    },
    computed: {
      direction: function(){
        return this.$store.getters.language === "fa" ?
                "rtl" : "ltr";
      }
    },  
  }
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.main-content{
  max-width: 1024px;
  margin: 0 auto;
}
</style>
