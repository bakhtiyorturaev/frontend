<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                {{ $t("tahririyat_azolari") }}
            </h2>
            <div class="main-basic" v-if="members.length > 0">
                <div v-for="(item, index) in members" :key="index">
                    <p v-html="item.content"></p>
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
            members: [],
        };
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        async getOrders() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/uz/tahririyat/editor-staff");

                this.members = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>