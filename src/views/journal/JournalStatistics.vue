<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                Statistika
            </h2>
            <div v-if="journal_statistics.length > 0">
                <div class="main-basic" v-for="(item, index) in journal_statistics" :key="index">
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
            journal_statistics: [],
        };
    },
    mounted() {
        this.getAbout();
    },
    methods: {
        async getAbout() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/jurnal/statistics");

                this.journal_statistics = response.data;
                console.log(response.data);
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>