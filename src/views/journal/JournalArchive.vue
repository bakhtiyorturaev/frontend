<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                Arxiv
            </h2>
            <div v-if="journal_archives.length > 0">
                <div class="main-basic" v-for="(item, index) in journal_archives" :key="index">
                    <!-- <h5>{{ item }}</h5> -->
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
            journal_archives: [],
        };
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        async getOrders() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/jurnal/magazine-archives/");

                this.journal_archives = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>