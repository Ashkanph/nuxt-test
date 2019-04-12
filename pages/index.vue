<template>
  <section class="container">
    <ContactForm />
  </section>
</template>

<script>
import ContactForm  from '~/components/Contact/ContactForm'

export default {
  components: {
    ContactForm
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
