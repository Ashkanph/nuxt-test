<template>
  <form @submit.prevent="onSave"
        class="contact-form">
    <AppControlInput v-model="contactForm.name"
                     placeholder="Name"></AppControlInput>
    <AppControlInput v-model="contactForm.email"
                     type="email"
                     placeholder="Your email address"></AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="contactForm.message"
      placeholder="Message"
      rows="10"></AppControlInput>
    <AppButton type="submit" 
               :disabled="checkForm"
               btnStyle="button_color_inverted">Send message</AppButton>
    <p :style="{color: notificationColor, marginTop: '1rem'}">{{notification}}</p>
  </form>
  

</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

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
      notificationColor: "green"
    };
  },
  computed:{
    checkForm(){
      return this.contactForm.name == "" ||
             this.contactForm.email == "" ||
             this.contactForm.message == "";
    }
  },
  methods: {
    onSave() {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // Random boolean result
          let result = this.randomBoolean();
          if(result)
            resolve(true);
          else
            reject(); 
        }, 600);
      }).then((res) => {
          console.log("Success");
          this.notificationColor = "green"
          this.notification = "Your message sent successfully."
      }).catch(() => {
          console.log("Error");
          this.notificationColor = "red"
          this.notification = "An error happened. Please try later."
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
