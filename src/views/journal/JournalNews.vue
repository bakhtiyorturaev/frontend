<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                Jurnal yangiliklari
            </h2>
            <div v-if="journal_about.length > 0">
                <div class="main-basic" v-for="(item, index) in journal_about" :key="index">
                    <h5>{{ item.title_uz }}</h5>
                    <p>{{ item.content_uz }}</p>
                </div>
            </div>
            <div v-else id="main-basic">
                <h3 style="color: red; text-align: center;">Mavjud emas</h3>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            journal_about: [],
        };
    },
    mounted() {
        this.getAbout();
    },
    methods: {
        async getAbout() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/jurnal/magazine-news/");

                this.journal_about = response.data;
                console.log(response.data);
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>