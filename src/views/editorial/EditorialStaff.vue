<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                {{ $t("tahririyat_azolari") }}
            </h2>
            <div class="main-basic" v-if="members.length > 0">
                <div v-for="(item, index) in transformList(members)" :key="index">
                    <p v-html="item.content"></p>
                </div>
            </div>
            <div v-else id="main-basic">
                <h3 style="color: red; text-align: center;">{{ $t("mavjud_emas") }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

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

        // 🔹 Tilga qarab content tanlash funksiyasi
        transformList(data) {
            const locale = localStorage.getItem("locale") || "uz"; // Brauzerdagi tilni olish

            return data.map((item) => {
                let newItem = { ...item };

                // `content_uz`, `content_ru`, `content_en` dan foydalanuvchi tiliga mosini tanlash
                if (item[`content_${locale}`]) {
                    newItem.content = item[`content_${locale}`];
                } else {
                    newItem.content = item.content_uz || ""; // Fallback - O'zbek tilini default qilamiz
                }

                return newItem;
            });
        },
    },
};
</script>

<style></style>

