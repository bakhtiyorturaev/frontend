<template>
  <div>
    <nav class="nav">
      <div class="nav-logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="nav-items">
        <router-link active-class="active-class" to="/">Bosh Sahifa</router-link>
        <router-link active-class="active-class" to="/">Ilmiy maktablarimiz</router-link>
        <router-link active-class="active-class" to="/">Bog'lanish</router-link>
        <input type="search" placeholder="Izlash">
      </div>
    </nav>

    <div class="header">
      <p class="header-title">Jurnal</p>
      <router-link to="/" active-class="active-class-header">Jurnal yangiliklari</router-link>
      <router-link to="/about" active-class="active-class-header">Jurnal haqida</router-link>
      <router-link to="/requirments" active-class="active-class-header">Jurnal talablari</router-link>
      <router-link to="/no/page" active-class="active-class-header">Arxiv</router-link>
      <router-link to="/no/page" active-class="active-class-header">Statistika</router-link>
      <p class="header-title">Mualliflarga</p>
      <router-link to="/guide" active-class="active-class-header">Maqola tayyorlash bo'yicha yo'riqnoma</router-link>
      <router-link to="/no/page" active-class="active-class-header">Namunaviy hujjatlar</router-link>
      <router-link to="/no/page" active-class="active-class-header">Mualliflik huquqi</router-link>
      <p class="header-title">Tahririyat</p>
      <router-link to="/no/page" active-class="active-class-header">Tahririyat rahbariyati</router-link>
      <router-link to="/no/page" active-class="active-class-header">Tahririyat a'zolari</router-link>
      <router-link to="/no/page" active-class="active-class-header">Fahriy xorijiy tahririyat a'zolari</router-link>
      <router-link to="/no/page" active-class="active-class-header">Xorijiy tahririyat a'zolari</router-link>
    </div>

    <div class="main">
      <div class="main-top">
        <div class="main-top-img">
          <img src="../assets/images/basic-img-1.jpg" alt="">
        </div>
        <div class="main-top-img">
          <img src="../assets/images/basic-img-2.jpg" alt="">
        </div>
        <!-- <div class="main-top-text"> -->
        <!-- <h4>Ilmiy - elektron jurnal</h4> -->
        <!-- <p>08.00.00 - Iqtisodiyot yo'nalishida</p> -->
        <!-- <p>OAK ro'yxatida</p> -->
        <!-- <p>2024-yil, 4-son</p> -->
        <!-- <p>Maqolalar soni - 16 ta</p> -->
        <!-- <a href="#">Jurnal yangi sonining to'liq shaklini yuklab olish</a> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.active-class-header {
  padding-left: 10px !important;
  background: #c1c1c1a2;
  color: #fff;
}
</style>