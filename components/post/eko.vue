<template>
    <!-- homepage blog grids -->
              <div class="col-lg-4 col-md-6 col-sm-12  blog-grid " id="zoomIn" v-if="post.category.selectedid == '1'">
                <div class="container mt-5" >
                    <div class="card text-white" >
                        <figure><img :src="post.image" class="card-img-top img-fluid"  alt="..."></figure>
                        <div class="card-img-overlay">
                            <h5 class="card-title">{{post.category.selectedname}}</h5>
                            <a href="" style="text-decoration : none;"><p class="card-text">{{post.title}}</p></a>
                        </div>
                        <div class="blog-info">
                            <ul >
                             <li><a href="">{{post.subtitle}}</a></li>
                             <li><span class="fa fa-calendar mr-2"></span>Jan 16, 2020</li>
                            </ul>
                        </div>
                       
                        </div>              
                </div>      
                </div>
<!-- //homepage blog grids -->
</template>
<script>
export default {
    props : {
        post : {
            required : true
        }

    }
}
</script>