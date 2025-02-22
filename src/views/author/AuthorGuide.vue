<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                Tahririyat a'zolari
            </h2>
            {{ members }}
            <div v-if="members.length > 0">
                <div class="main-member" v-for="(item, index) in members" :key="index">
                    <a :href="item.upload_file_uz"> ko'rish</a>
                    <VueDocPreview :value="item.upload_file_uz" :type="docType" />
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
import VueDocPreview from 'vue-doc-preview'


export default {
    components: {
        VueDocPreview
    },
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
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/muallif/article-preparation-guides/");

                this.members = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>