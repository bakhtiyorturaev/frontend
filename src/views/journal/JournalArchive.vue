<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                Arxiv
            </h2>
            <pre>
                <!-- {{ datas.results }} -->
            </pre>
            <div>
                <div class="main-basic" v-for="(item, index) in datas.results" :key="index">
                    <a :href="datas.results.id">
                        <h5 v-html="item.content_uz"></h5>
                    </a>
                </div>
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
        async getOrders() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/jurnal/magazine-archives/");

                this.datas = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>