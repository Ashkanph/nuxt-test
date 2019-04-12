<template>
  <div class="header">
    <AppButton v-on:click.prevent="changeLanguage('en')">En</AppButton>
    <AppButton v-on:click.prevent="changeLanguage('fa')">فا</AppButton>
  </div>
</template>

<script>
  import AppButton from "@/components/UI/AppButton";

  export default {

    components: {
      AppButton
    },
    methods: {
      changeLanguage: function(lang){
        this.$store.commit("setLanguage", lang)
      }
    },
  }
</script>

<style>
  .header{
    background-color: #ccc;
    left: 0;
    right: 0;
    position: fixed;
    height: 3rem;
    padding: 0.5rem;
  }
</style>
