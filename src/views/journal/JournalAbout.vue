<template>
    <div>
        <div class="main">
            <div class="main-basic" v-for="(item, index) in datas" :key="index">
                <h5>{{ item.magazine.name_uz }}</h5>
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
            datas: [],
        };
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        async getOrders() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/uz/jurnal/about-magazines");

                this.datas = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },
    },
};
</script>

<style>
/* ✨ Qo'shimcha styling kerak bo'lsa shu yerga yozing */
</style>
