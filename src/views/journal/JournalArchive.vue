<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                Arxiv
            </h2>
            <pre>
                <!-- {{ datas.results }} -->
            </pre>
            <div>
                <div class="main-basic" v-for="(item, index) in transformList(datas.results)" :key="index">
                    <a :href="datas.results.id">
                        <h5 v-html="item.content"></h5>
                    </a>
                </div>
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
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/jurnal/magazine-archives/");

                this.datas = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>