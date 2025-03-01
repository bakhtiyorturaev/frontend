<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                {{ $t("conference") }}
            </h2>
            <div v-if="datas.length > 0">
                <div class="main-basic" v-for="(item, index) in datas" :key="index">
                    <p v-html="item.description"></p>
                    <a :href="item.link" target="_blank">Konferensiyaga ro‘yxatdan o‘tish havolasi</a>
                </div>
            </div>
            <div id="main-basic" v-else>
                <h3 style="color: red; text-align: center;">{{ $t("mavjud_emas") }}</h3>
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
                const response = await axios.get("https://back.tift-fintech.uz/uz/conferences");

                this.datas = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>