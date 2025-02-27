<template>
    <div>
        <div class="main">
            <div class="main-basic" v-for="(item, index) in journal_news" :key="index">
                <h5>{{ getTranslatedField(item.magazine, 'name') }}</h5>
                <p v-html="getTranslatedField(item, 'bio')"></p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            journal_news: [],
            currentLanguage: 'uz',  // Til sozlamasi (uz, ru, en)
        };
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        // 📝 API'dan ma'lumotlarni olish
        async getOrders() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/jurnal/about-magazine/", {
                    withCredentials: true,  // 🍪 Cookie va sessionni yuborish
                });

                this.journal_news = response.data;
                console.log("Ma'lumot yuklandi:", response.data);
            } catch (error) {
                console.error("Xatolik yuz berdi:", error.response);
            }
        },

        // 🌍 Har bir til uchun avtomatik tarjima oluvchi funksiya
        getTranslatedField(item, field) {
            const fieldName = `${field}_${this.currentLanguage}`;
            return item && item[fieldName] ? item[fieldName] : 'Ma’lumot topilmadi';
        },
    },
};
</script>

<style>
/* ✨ Qo'shimcha styling kerak bo'lsa shu yerga yozing */
</style>
