<template>
    <!-- site header -->
<header id="site-header" class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="index.html">
            <img src="images/cubeLogo.png" class="" alt="">
            <img src="images/nBoxFont.png" alt="" style="padding-top : 0px; padding-left: 0px !important; max-width: 100px; margin-top : 50px; margin-left : -20px;">
        </a>
        <button class="navbar-toggler bg-gradient" onclick="showFunction()" id="collapse" type="button" data-toggle="collapse"
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav m-auto">


                


                <li class="nav-item active">
                    <nuxt-link 
                    to="/"
                    tag="a"
                    class="nav-link"
                    >Tümü
                    </nuxt-link>
                    
                </li>
                <li class="nav-item">
                    <nuxt-link 
                    to="/eko"
                    tag="a"
                    class="nav-link"
                    
                    >Ekonomi
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="services.html">Siyaset</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Teknoloji</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Spor</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Bilim-Teknik</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Yerel</a>
                </li>        
                        
            </ul>
               
            <ul class="navbar-nav">
                     <li class="nav-item dropdown">
                  <a  class="dropdown-toggle nav-link"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Hesabım
                    </a>                 
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenu">
                      <a class="dropdown-item" href="#">Sonra Oku</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Çıkış yap</a>
                    </div>
                  </li>       
            </ul>
        </div>
    </nav>
  </header>
  <!-- //site header -->
</template>

