import Vue from 'vue'
import locale from "@/static/i18n" 

Vue.mixin({
  methods: {
    t(name) {
        let language = this.$store.getters.language;
        return locale[name][language];
    },
    tnotif(name){
        let language = this.$store.getters.language;
        return locale.notifications[name][language];
    }
  }
})