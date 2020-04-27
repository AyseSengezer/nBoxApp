<template>
  <div>
      <ekolist :posts="fetchedPosts"  />    
      
  </div>
</template>
<script>
import ekolist from '@/components/post/ekolist'
export default {
    
    components : {
        ekolist
    },
    computed :{
        fetchedPosts(){
            return this.$store.getters.getPosts
        }
    },
}
</script>

