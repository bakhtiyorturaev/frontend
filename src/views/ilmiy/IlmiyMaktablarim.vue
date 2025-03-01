<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                Ilmiy maktablarimiz
            </h2>
            <div class="main-basic" v-if="datas.length > 0">
                <div v-for="(item, index) in datas" :key="index">
                    <h3>{{ item.name }}</h3>
                    <p v-html="item.academic_degree_uz"></p>
                    <p v-html="item.haqida_uz"></p>
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
            datas: [],
        };
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        async getOrders() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/uz/ilmiy/ilmiy-maktablarim/");

                this.datas = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>