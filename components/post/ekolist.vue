<template>
    
<section id="blog">
    <div class="container">
        <div class="row align-items-center mt-5 "  > 
                <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12 mt-5" >
                <h4 class="section-title mt-5 pt-5" >Haberler</h4>
            </div>
            <div class="d-flex flex-wrap"  >
                <eko  v-for="post in posts" :post="post"  :key="post.id" />
            </div>  
        
            </div>           
        </div>                   
</section>

</template>
<script>
import eko from '@/components/post/eko'

export default {
    components : {
        eko
        
    },
    props: {
        posts : {
            required : true
        }
}
}

</script>