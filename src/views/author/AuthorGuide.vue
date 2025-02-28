<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                Tahririyat rahbariyati
            </h2>
            <div v-if="datas.length > 0">
                <div class="main-member" v-for="(item, index) in datas" :key="index">
                    <img :src="item.image" alt="">
                    <h3>{{ item.name }}</h3>
                    <h4>{{ item.title_1_uz }}</h4>
                    <p>{{ item.title_2_uz }}</p>
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
                const response = await axios.get("https://back.tift-fintech.uz/uz/tahririyat/editor-board");

                this.datas = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>