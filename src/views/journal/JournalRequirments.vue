<template>
  <div>
    <div class="main">
      <h2 class="main-title">Jurnal talablari</h2>
      <div class="main-basic" v-for="(item, index) in journal_req" :key="index">
        <h5>{{ item.title_uz }}</h5>
        <p v-html="item.content_uz"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      journal_req: [],
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    async getOrders() {
      try {
        const response = await axios.get(
          "https://back.tift-fintech.uz/en-gb/jurnal/journal-requirements/",
          {
            withCredentials: true, // ✅ Cookies va sessiyalar yuboriladi
          }
        );

        this.journal_req = response.data;
        console.log("✅ Ma'lumot olindi:", response.data);
      } catch (error) {
        console.error("❌ Xatolik yuz berdi:", error);
      }
    },
  },
};
</script>

<style></style>

