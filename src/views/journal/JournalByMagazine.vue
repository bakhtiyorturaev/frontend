<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                {{ $t("archive_detail") }}
            </h2>
            <div>
                <div class="main-basic">
                    <h5>{{ transformList(datas.magazine, 'obj')?.which_number }}. {{ transformList(datas.magazine,
                        'obj')?.name }}</h5>
                    <div class="table" v-for="(category, index) in transformList(datas).categories" :key="index">
                        {{ category.name }}
                        <table v-if="category.articles.length > 0">
                            <tr>
                                <th>Maqola nomi</th>
                                <th>Muallif FISH</th>
                                <th>Yuklab olish</th>
                            </tr>
                            <tr v-for="(article, index) in transformList(category.articles)" :key="index">
                                <td>{{ article.name }}</td>
                                <td>{{ article.author.name }}</td>
                                <td>
                                    <button @click="downloadFile(article.upload_file)" class="btn_download">Yuklab
                                        olish</button>
                                    <br>
                                    <a :href="article.upload_file" target="_blank">
                                        <button class="btn_view">Ochib ko'rish</button>
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
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
        downloadFile(upload_file) {
            const link = document.createElement("a");
            link.href = upload_file;
            link.setAttribute("download", ""); // Fayl yuklab olish uchun
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
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
                const response = await axios.get("https://back.tift-fintech.uz/uz/article-categories/by-magazine/" + this.$route.params.id);

                this.datas = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>