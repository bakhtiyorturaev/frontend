<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                Konferensiya
            </h2>
            <!-- <div v-if="members.length > 0">
                <div class="main-member" v-for="(item, index) in members" :key="index">
                    <img :src="item.image" alt="">
                    <h3>{{ item.name }}</h3>
                    <h4>{{ item.position_uz }}</h4>
                    <p>{{ item.university_graduated_uz }}</p>
                </div>
            </div> -->
            <div id="main-basic">
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
        // this.getOrders();
    },
    methods: {
        async getOrders() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/tahririyat/honorary-foreign-editorial-members");

                this.members = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>