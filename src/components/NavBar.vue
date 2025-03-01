<template>
  <div>
    <nav class="nav">
      <div class="nav-logo">
        <router-link to="/">
          <img src="../assets/images/logo.webp" alt="">
        </router-link>
      </div>
      <div class="nav-items">
        <router-link active-class="active-class" to="/conference">{{ $t("conference") }}</router-link>
        <router-link active-class="active-class" to="/">{{ $t("home_page") }}</router-link>
        <router-link active-class="active-class" to="/">{{ $t("ilmiy_school") }}</router-link>
        <router-link active-class="active-class" to="/">{{ $t("contact") }}</router-link>
        <select name="lang" id="" @change="changeLang" v-model="lang">
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>



    <div class="header">
      <p class="header-title">{{ $t("journal") }}</p>
      <router-link to="/journal/news" active-class="active-class-header">{{ $t("journal_news") }}</router-link>
      <router-link to="/about" active-class="active-class-header">{{ $t("journal_about") }}</router-link>
      <router-link to="/requirments" active-class="active-class-header">{{ $t("journal_talablari") }}</router-link>
      <router-link to="/archive" active-class="active-class-header">{{ $t("archive") }}</router-link>
      <router-link to="/statistics" active-class="active-class-header">{{ $t("statistics") }}</router-link>
      <p class="header-title">{{ $t("mualliflarga") }}</p>
      <router-link to="/make/document" active-class="active-class-header">{{ $t("yoriqnoma") }}</router-link>
      <router-link to="/simple/document" active-class="active-class-header">{{ $t("namunaviy_hujjatlar")
        }}</router-link>
      <router-link to="/copyright/document" active-class="active-class-header">{{ $t("mualliflik_huquqi")
        }}</router-link>
      <p class="header-title">{{ $t("tahririyat") }}</p>
      <!--<router-link to="/guide" active-class="active-class-header">{{ $t("tahririyat_rahbariyati") }}</router-link>-->
      <router-link to="/staff" active-class="active-class-header">{{ $t("tahririyat_azolari") }}</router-link>
      <router-link to="/staff/foreign" active-class="active-class-header">{{ $t("xorijiy_azolar") }}</router-link>
      <router-link to="/honorary/foreign/editorial/members  " active-class="active-class-header">{{
        $t("xorijiy_tahririyat_azolar") }}</router-link>
    </div>

    <div class="main">
      <div class="main-top">
        <div class="main-top-img">
          <img src="../assets/images/top-img-1.png" alt="">
        </div>
        <div class="main-top-img">
          <img src="../assets/images/top-img-2.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: localStorage.getItem('locale') || 'uz'
    };
  },
  mounted() {

  },
  methods: {
    changeLang() {
      this.$i18n.locale = this.lang;
      localStorage.setItem("locale", this.lang);
    },
  }
}
</script>

<style>
.active-class-header {
  padding-left: 10px !important;
  background: #c1c1c1a2;
  color: #fff;
}
</style>