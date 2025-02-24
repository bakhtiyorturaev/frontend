<template>
    <div>
        <div class="main">
            <!-- <h2 class="main-title">
                Jurnal haqida
            </h2> -->
            <div class="main-basic" v-for="(item, index) in journal_news" :key="index">
                <h5>{{ item.magazine }}</h5>
                <p v-html="item.bio_uz"></p>
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
        };
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        async getOrders() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/jurnal/about-magazines/");

                this.journal_news = response.data;
                console.log(response.data);
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>