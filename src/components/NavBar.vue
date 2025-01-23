<template>
  <div>
    <nav class="nav">
      <div class="nav-logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="nav-items">
        <router-link to="/">Bosh Sahifa</router-link>
        <router-link to="/">Ilmiy maktablarimiz</router-link>
        <router-link to="/">Bog'lanish</router-link>
        <input type="search" placeholder="Izlash">
      </div>
    </nav>
    
    <div class="header">
      <p class="header-title">Jurnal</p>
      <router-link to="/" class="active">Jurnal yangiliklari</router-link>
      <router-link to="/about">Jurnal haqida</router-link>
      <a href="#">Jurnal talabalari</a>
      <a href="#">Arxiv</a>
      <a href="#">Statistika</a>
      <p class="header-title">Mualliflarga</p>
      <a href="#">Maqola tayyorlash bo'yicha</a>
      <a href="#">Yo'riqnoma</a>
      <a href="#">Namunaviy hujjatlar</a>
      <a href="#">Mualliflik huquqi</a>
      <p class="header-title">Tahririyat</p>
      <a href="#">Tahririyat rahbariyati</a>
      <a href="#">Tahririyat a'zolari</a>
      <a href="#">Fahriy xorijiy tahririyat a'zolari</a>
      <a href="#">Xorijiy tahririyat a'zolari</a>
    </div>

    <div class="main">
      <div class="main-top">
        <div class="main-top-img">
          <img src="../assets/images/news-img.jpg" alt="">
        </div>
        <div class="main-top-text">
          <h4>Ilmiy - elektron jurnal</h4>
          <p>08.00.00 - Iqtisodiyot yo'nalishida</p>
          <p>OAK ro'yxatida</p>
          <p>2024-yil, 4-son</p>
          <p>Maqolalar soni - 16 ta</p>
          <a href="#">Jurnal yangi sonining to'liq shaklini yuklab olish</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style></style>