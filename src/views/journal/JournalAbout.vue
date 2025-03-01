<template>
    <div>
        <div class="main">
            <div class="main-basic" v-for="(item, index) in transformList(datas)" :key="index">
                <h5>{{ item.magazine.name_uz }}</h5>
                <a :href="item.file" target="_blank">{{ $t("view") }}</a>
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
