<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                {{ $t("xorijiy_azolar") }}
            </h2>
            <div v-if="datas.length > 0">
                <div class="main-member" v-for="(item, index) in transformList(datas)" :key="index">
                    <img :src="item.image" alt="">
                    <h3>{{ item.name }}</h3>
                    <h4>{{ item.position }}</h4>
                    <p>{{ item.university_graduated }}</p>
                </div>
            </div>
            <div v-else id="main-basic">
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
        transformList(data, type = "array") {
            const locale = localStorage.getItem("locale") || "uz";
            const transformObject = (obj) => {
                let newObj = { ...obj };
                Object.keys(obj).forEach(key => {
                    if (key.endsWith("_uz") || key.endsWith("_ru") || key.endsWith("_en")) {
                        const baseKey = key.slice(0, -3);
                        if (!newObj[baseKey]) {
                            newObj[baseKey] = obj[`${baseKey}_${locale}`] || obj[`${baseKey}_uz`];
                        }
                    }
                }); return newObj;
            };
            if (type === "array" && Array.isArray(data)) return data.map(transformObject);
            if (type === "obj" && typeof data === "object" && data !== null) return transformObject(data);
            return data;
        },
        async getOrders() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/tahririyat/foreign-editorial-members/");

                this.datas = response.data;
                console.log(response.data);

            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>