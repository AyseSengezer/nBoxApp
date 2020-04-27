<template>
  <div>
    <Header />
    <!-- <Banner /> -->
    <nuxt />
    <Footer />
     <button @click="topFunction()" id="movetop"  class=" butn-primary butn-style" title="Go to top">
  <span class="fa fa-angle-up"></span>
</button>
    

  </div>
</template>
<script>
import Header from '@/components/common/Header'
import Banner from '@/components/common/Banner'
import Footer from '@/components/common/Footer'

export default {
 

  head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
        
      ]
    }
  },
  components : {
    Header,
    // Banner,
    Footer
  },
  mounted() {
      // Kullanıcı dokümanın üst kısmından 20 piksel aşağı kaydırdığında düğmeyi göster
      window.onscroll = function () {
      scrollFunction()
    
      };
      // toggle button
      document.getElementById("collapse").onclick = function() {
        showFunction()
        
        };
      // hesabım 
        document.getElementById("navbarDropdown").onclick = function() {
        navbarDropdown()
        
        };


    // Kullanıcı dokümanın üst kısmından 20 piksel aşağı kaydırdığında düğmeyi göster
      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("movetop").style.display = "block";
        } else {
          document.getElementById("movetop").style.display = "none";
        }
      };
      // toggle button
      function showFunction() {
      document.getElementById("navbarNav").classList.toggle("show");
    }
    // hesabım 
    function navbarDropdown() {
      document.getElementById("dropdownMenu").classList.toggle("show");
    }
  
  },
 methods: { 
   // Kullanıcı dokümanın üst kısmından 20 piksel aşağı kaydırdığında düğmeyi göster
   // Kullanıcı düğmeyi tıkladığında, belgenin en üstüne gidin
    
    topFunction() {
        window.scrollTo(0,0);
    }
}
}
</script>

<style>

</style>