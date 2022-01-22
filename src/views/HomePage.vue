<template>
    <span>
        <HomeNavBar />
        <HomeMainSection />
        <HomeServiceSection />
        <HomeContactSection />
        <HomeFooter />
    </span>
</template>

<script>

import HomeNavBar from '@/components/HomeNavBar.vue'
import HomeMainSection from '@/components/HomeMainSection.vue'
import HomeServiceSection from '@/components/HomeServiceSection.vue'
import HomeContactSection from '@/components/HomeContactSection.vue'
import HomeFooter from '@/components/HomeFooter.vue'

  export default {
   
    data () {
      return {

      }
    },

    components:{
        HomeNavBar,
      HomeMainSection,
      HomeServiceSection,
      HomeContactSection,
      HomeFooter
    }
  }
</script>