<template>
  <form @submit.prevent="onSave"
        class="contact-form">
    <AppControlInput v-model="contactForm.name"
                     :placeholder="t('name')"></AppControlInput>
    <AppControlInput v-model="contactForm.email"
                     type="email"
                     :placeholder="t('email')"></AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="contactForm.message"
      :placeholder="t('message')"
      rows="10"></AppControlInput>
    <AppButton type="submit" 
               :disabled="checkForm"
               btnStyle="button_color_inverted">{{t('sendMsg')}}</AppButton>
    <p v-if="result === true" :style="{color: 'green', marginTop: '1rem'}">
      {{ tnotif('successfullySentMsg') }}
    </p>
    <p v-else-if="result === false" :style="{color: 'red', marginTop: '1rem'}">
      {{ tnotif('errorSendingMsg') }}
    </p>
  </form>
</template>


<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
import Vue from "vue";

let miniToastr
if (process.client) {
  miniToastr = require('mini-toastr')
}

export default {
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      contactForm: {
          name: "",
          email: "",
          message: ""
      },
      notification: "",
      result: ""
    };
  },  
  mounted() {
    if(miniToastr != null)
      miniToastr.default.init()

    this.showNotif()
  },
  notifications: {
    showNotif:{
        title: 'Welcome!',
        message: "Hello. For testing notifications!",
        type: 'info'
      }
  },
  computed:{
    checkForm(){
      return this.contactForm.name == "" ||
             this.contactForm.email == "" ||
             this.contactForm.message == "";
    }
  },
  methods: {
    async onSave() {
      try {
        let result = await this.simulateBackend();
        if(result){
          this.result = true
          this.notification = this.tnotif('successfullySentMsg')
        }
      } catch (error) {
        this.result = false
        this.notification = this.tnotif('errorSendingMsg')
      }
    },
    simulateBackend(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Random boolean result
          let result = this.randomBoolean();
          if(result)
            resolve(true);
          else
            reject(false); 
        }, 600);
      });
    },
    randomBoolean(){
      return  Math.floor(Math.random()*10)%2 === 1 ? true : false;
    }
  },
};
</script>

<style>
    .contact-form{
        width: 100%;
        padding: 4rem;
    }
</style>
