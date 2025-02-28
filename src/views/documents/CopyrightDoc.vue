<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                Mualliflik huquqi
            </h2>
            <div v-if="datas.length > 0">
                <div class="main-basic" v-for="(item, index) in datas" :key="index">
                    <h2 v-html="item.title_uz"></h2>
                    <p v-html="item.content_uz"></p>
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
                const response = await axios.get("https://back.tift-fintech.uz/uz/muallif/copyright");

                this.datas = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>