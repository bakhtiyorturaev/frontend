<template>
  <div>
    <div class="main">
      <h2 class="main-title">{{ $t("journal_talablari") }}</h2>
      <div class="main-basic" v-for="(item, index) in transformList(datas)" :key="index">
        <h5>{{ item.title }}</h5>
        <p v-html="item.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      datas: [],
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    transformList(data, type = "array") {
      const locale = localStorage.getItem("locale") || "uz";
      const transformObject = (obj) => {
        let newObj = { ...obj };
        Object.keys(obj).forEach(key => {
          if (key.endsWith("_uz") || key.endsWith("_ru") || key.endsWith("_en")) {
            const baseKey = key.slice(0, -3);
            if (!newObj[baseKey]) {
              newObj[baseKey] = obj[`${baseKey}_${locale}`] || obj[`${baseKey}_uz`];
            }
          }
        }); return newObj;
      };
      if (type === "array" && Array.isArray(data)) return data.map(transformObject);
      if (type === "obj" && typeof data === "object" && data !== null) return transformObject(data);
      return data;
    },
    async getOrders() {
      try {
        const response = await axios.get(
          "https://back.tift-fintech.uz/en-gb/jurnal/journal-requirements/",
          {
            withCredentials: true, // ✅ Cookies va sessiyalar yuboriladi
          }
        );

        this.datas = response.data;
        console.log("✅ Ma'lumot olindi:", response.data);
      } catch (error) {
        console.error("❌ Xatolik yuz berdi:", error);
      }
    },
  },
};
</script>

<style></style>
